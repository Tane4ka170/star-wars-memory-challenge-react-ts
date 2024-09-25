import { CardType, createBoard } from "./setup";
// Styles
import { Grid } from "./App.styles";
import React from "react";
import { shuffleArray } from "./utils";
import Card from "./components/Card";

const App = () => {
  const [cards, setCards] = React.useState<CardType[]>(
    shuffleArray(createBoard())
  );
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  );

  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      alert("Game won");
      setGameWon(true);
    }
  }, [matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );

    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);
    setClickedCard(undefined);
  };

  return (
    <div>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  );
};

export default App;
