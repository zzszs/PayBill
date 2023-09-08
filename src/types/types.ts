export interface Person {
    createdAt: string,
    name: string,
    iban: string,
    id: string,
    price: number
}

export interface ListItem {
    id: string,
    name: string,
    price: number,
    people: Person[],
    error: {
        text: string,
        visible: boolean
    }
}