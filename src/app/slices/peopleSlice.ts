import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { Person } from "../../types/types";
import { RootState } from "../store";

const initialState: {data: Person[], status: 'idle' | 'loading' | 'success' | 'fail', error: string | null} = {
    data: [],
    status: 'idle',
    error: null
};

export const peopleSlice = createSlice({
  name: "addPerson",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      const newPerson: Person = {
        createdAt: `${new Date()}`,
        name: action.payload.name,
        iban: "",
        price: 0,
        id: `${new Date()}`,
      };

      state.data.push(newPerson);
    },
  },
});

export const { addPerson } = peopleSlice.actions;

export default peopleSlice.reducer;

export const getPersonsForItem = createSelector(
  [
    (state: RootState) => state.people,
    (_state: RootState, peopleFromItem) => peopleFromItem,
  ],
  (people, peopleFromItem) => {
    const peopleIds = peopleFromItem.map((person: Person) => person.id);
    const options = people.data
      .filter((person) => !peopleIds.includes(person.id))
      .map((person) => ({
        label: person.name,
        value: JSON.stringify(person),
      }));

    return options;
  }
);

export const getPersonsForTable = createSelector(
  [(state: RootState) => state.people, (state: RootState) => state.itemList],
  (people, itemList) => {
    const {data} = people
    const peopleArray = [];
    for (let i = 0; i < data.length; i++) {
      const priceArray = [];
      for (let j = 0; j < itemList.length; j++) {
        for (let k = 0; k < itemList[j].people.length; k++) {
          if (data[i].id === itemList[j].people[k].id) {
            priceArray.push(itemList[j].people[k].price);
          }
        }
      }
      const sum = !!priceArray.length ? priceArray.reduce((acc, value) => acc + value) : 0;
      peopleArray.push({
        id: data[i].id,
        key: data[i].id,
        name: data[i].name,
        iban: data[i].iban,
        price: sum,
      });
    }
    return peopleArray;
  }
);
