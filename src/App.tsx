import { CardType, createBoard } from "./setup";
// Styles
import { Grid } from "./App.styles";
import React from "react";
import { shuffleArray } from "./utils";

const App = () => {
  const [cards, setCards] = React.useState<CardType[]>(
    shuffleArray(createBoard())
  );
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  );

  return (
    <div>
      <Grid>
        {cards.map((card) => (
          <p>{card.id}</p>
        ))}
      </Grid>
    </div>
  );
};

export default App;
