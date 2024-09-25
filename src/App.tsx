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

  const handleCardClick = (currentClickedCard: CardType) => {
    setCards((prev) => prev.map((card) => card.id === currentClickedCard.id));
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
