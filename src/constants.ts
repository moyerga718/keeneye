export interface IConsumableItem {
  id: number;
  name: string;
  diceValues: number[],
  code: string,
  quantity: number
}

export const ITEM_TYPES : IConsumableItem[] = [
  {
    id: 1,
    name: "Machine Part",
    diceValues: [1,2,3],
    code: "MP",
    quantity: 0
  },
  {
    id: 2,
    name: "Steel",
    diceValues: [4,5,6],
    code: "ST",
    quantity: 0
  },
  {
    id: 3,
    name: "Ignition Source",
    diceValues: [7,8],
    code: "IS",
    quantity: 0
  },
  {
    id: 4,
    name: "Precious Metal",
    diceValues: [9,10],
    code: "PM",
    quantity: 0
  },
  {
    id: 5,
    name: "Natural Compound",
    diceValues: [11,12,13],
    code: "NC",
    quantity: 0
  },
  {
    id: 6,
    name: "Bio Matter",
    diceValues: [14,15,16],
    code: "BM",
    quantity: 0
  },
  {
    id: 7,
    name: "Organic Chemical",
    diceValues: [17,18],
    code: "OC",
    quantity: 0
  },
  {
    id: 8,
    name: "Rare Mineral",
    diceValues: [19,20],
    code: "RM",
    quantity: 0
  }
]