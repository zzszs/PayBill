export interface Person {
    createdAt: string,
    name: string,
    iban: string,
    id: string,
    price: number
}

export interface ListItem {
    name: string,
    price: number,
    people: Person[]
}

export type StoreType = {
    itemList: ListItem[],
    people: Person[]
}