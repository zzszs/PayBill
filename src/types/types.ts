export interface Person {
  createdAt: string;
  name: string;
  iban: string;
  id: string;
  price: number;
}

export interface ListItem {
  id: string;
  name: string;
  price: number;
  people: Person[];
  error: {
    text: string;
    visible: boolean;
  };
}

export interface PayBillTableCols {
  action: string;
  iban: string;
  id: string;
  key: string;
  name: string;
  price: string;
}
