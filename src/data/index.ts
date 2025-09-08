let counter = 0;
function iota(start?: number): number {
  if (typeof start === "number") {
    counter = start;
  }
  return counter++;
}
const Symbol = {
  FISH: iota(0),
  DEER: iota(),
  FROG: iota(),
  RABBIT: iota(),
  BUTTERFLY: iota(),
  NIGHTINGALE: iota(),
  SPY: iota(),
  NOBLE: iota(),
  ASSASSIN: iota(),
  GUARD: iota(),
  QUEEN: iota(),
};

import butterflyIcon from "../assets/butterfly.svg";
import deerIcon from "../assets/deer.svg";
import fishIcon from "../assets/fish.svg";
import frogIcon from "../assets/frog.svg";
import nightingaleIcon from "../assets/nightingale.svg";
import rabbitIcon from "../assets/rabbit.svg";
import queenIcon from "../assets/queen.svg";

export function getSymbol(symbol: (typeof Symbol)[keyof typeof Symbol]) {
  switch (symbol) {
    case Symbol.FISH:
      return fishIcon;
    case Symbol.DEER:
      return deerIcon;
    case Symbol.FROG:
      return frogIcon;
    case Symbol.RABBIT:
      return rabbitIcon;
    case Symbol.BUTTERFLY:
      return butterflyIcon;
    case Symbol.NIGHTINGALE:
      return nightingaleIcon;
    case Symbol.SPY:
      return "";
    case Symbol.NOBLE:
      return "";
    case Symbol.ASSASSIN:
      return "";
    case Symbol.GUARD:
      return "";
    case Symbol.QUEEN:
      return queenIcon;
    default:
      return "";
  }
}

export interface Card {
  points: number;
  symbol: (typeof Symbol)[keyof typeof Symbol];
  text: string;
}

export const light: Card[] = [
  {
    points: 3,
    symbol: Symbol.FISH,
    text: "Sie müssen weniger Karpfen besitzen als Ihr Nachbar links von Ihnen.",
  },
  {
    points: 3,
    symbol: Symbol.DEER,
    text: "Sie müssen weniger Hirsche besitzen als Ihr Nachbar links von Ihnen.",
  },
  {
    points: 3,
    symbol: Symbol.FROG,
    text: "Sie müssen weniger Kröten besitzen als Ihr Nachbar links von Ihnen.",
  },
  {
    points: 3,
    symbol: Symbol.RABBIT,
    text: "Sie müssen weniger Kaninchen besitzen als Ihr Nachbar links von Ihnen.",
  },
  {
    points: 3,
    symbol: Symbol.BUTTERFLY,
    text: "Sie müssen weniger Schmetterlinge besitzen als Ihr Nachbar links von Ihnen.",
  },
  {
    points: 3,
    symbol: Symbol.NIGHTINGALE,
    text: "Sie müssen weniger Nachtigallen besitzen als Ihr Nachbar links von Ihnen.",
  },
  {
    points: 3,
    symbol: Symbol.SPY,
    text: "Sie müssen mindestens 3 Spione besitzen.",
  },
  {
    points: 3,
    symbol: Symbol.NOBLE,
    text: "Sie müssen mindestens 3 Adligen besitzen.",
  },
  {
    points: 3,
    symbol: Symbol.ASSASSIN,
    text: "Sie müssen mindestens 2 Meuchelmörder besitzen.",
  },
  {
    points: 3,
    symbol: Symbol.GUARD,
    text: "Sie müssen mindestens 4 Wachen besitzen.",
  },
];

export const dark: Card[] = [
  {
    points: 3,
    symbol: Symbol.FISH,
    text: "Die Karpfen müssen am Hof in Ungnade gefallen sein.",
  },
  {
    points: 3,
    symbol: Symbol.DEER,
    text: "Die Hirschen müssen am Hof in Ungnade gefallen sein.",
  },
  {
    points: 3,
    symbol: Symbol.FROG,
    text: "Die Kröten müssen am Hof in Ungnade gefallen sein.",
  },
  {
    points: 3,
    symbol: Symbol.RABBIT,
    text: "Die Kaninchen müssen am Hof in Ungnade gefallen sein.",
  },
  {
    points: 3,
    symbol: Symbol.BUTTERFLY,
    text: "Die Schmetterlinge müssen am Hof in Ungnade gefallen sein.",
  },
  {
    points: 3,
    symbol: Symbol.NIGHTINGALE,
    text: "Die Nachtigallen müssen am Hof in Ungnade gefallen sein.",
  },
  {
    points: 3,
    symbol: Symbol.QUEEN,
    text: "Mindestens 1 Karte jeder Familie muss am Ende in deiner Auslage sein.",
  },
  {
    points: 3,
    symbol: Symbol.QUEEN,
    text: "Maximal drei Familien dürfen im Hof im Rampenlicht stehen.",
  },
  {
    points: 3,
    symbol: Symbol.QUEEN,
    text: "Mindestens zwei Familien müssen am Hof in Ungnade gefallen sein.",
  },
  {
    points: 3,
    symbol: Symbol.QUEEN,
    text: "Eine Familie muss am Ende mindestens 5 Karten in deiner Auslage haben.",
  },
];
