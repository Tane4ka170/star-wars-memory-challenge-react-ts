import card_1 from "./img/card_1.webp";
import card_2 from "./img/card_2.jpg";
import card_3 from "./img/card_3.webp";
import card_4 from "./img/card_4.webp";
import card_5 from "./img/card_5.webp";
import card_6 from "./img/card_6.jpg";
import card_7 from "./img/card_7.webp";
import card_8 from "./img/card_8.jpg";

// cardback
import cardBack from "./img/card_back.jpg";

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

const cards: string[] = [
  card_1,
  card_2,
  card_3,
  card_4,
  card_5,
  card_6,
  card_7,
  card_8,
];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
  }));
