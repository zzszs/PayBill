import { createSlice, nanoid  } from "@reduxjs/toolkit";
import { ListItem } from "../../types/types";

const initialState: ListItem[] = [];

export const itemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem: ListItem = {
        id: nanoid(),
        name: action.payload.name,
        price: parseFloat(action.payload.price),
        people: [],
        error: {
          text: "Total price is lower than price of the item",
          visible: false,
        },
      };
      state.push(newItem);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id)
    },
    addPersonToItem: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].people.push(action.payload.person);
        }
      }
    },
    removePersonFromItem: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].people = state[i].people.filter((person) => person.id !== action.payload.personId)
        }
      }
    },
    removePersonFromAllItems: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        state[i].people = state[i].people.filter((person) => person.id !== action.payload.id)
      }
    },
    changePricesEqually: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          for (let j = 0; j < state[i].people.length; j++) {
            state[i].people[j].price = action.payload.price
          }
          state[i].error = { ...state[i].error, visible: false }
        }
      }
    },
    changePersonPrice: (state, action) => {
      const allPrices = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          for (let j = 0; j < state[i].people.length; j++) {
            if (state[i].people[j].id === action.payload.person.id) {
              state[i].people[j] = {...action.payload.person, price: parseFloat(action.payload.person.price)};
            }
            allPrices.push(parseFloat(`${state[i].people[j].price}`));
          }
          const sum = allPrices.reduce((acc, value) => acc + value);

          if (sum < state[i].price) {
            state[i].error = {
              text: "Total price is lower than price of the item",
              visible: true,
            };
          }
          if (sum > state[i].price) {
            state[i].error = {
              text: "Total price is higher than price of the item",
              visible: true,
            };
          }
          if (sum === state[i].price) {
            state[i].error = { ...state[i].error, visible: false };
          }
        }
      }
    },
  },
});

export const { addItem, removeItem, addPersonToItem, removePersonFromItem, removePersonFromAllItems, changePricesEqually, changePersonPrice } =
  itemListSlice.actions;

export default itemListSlice.reducer;
