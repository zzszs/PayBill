import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Person } from "../../types/types";
import { RootState } from "../store";
import axios, { AxiosError } from "axios";

const POST_URL = "https://63e3e2d765ae49317719e670.mockapi.io/api/v1/users";

export const postPerson = createAsyncThunk(
  "person/add",
  async (name: string) => {
    try {
      const res = await axios.post(POST_URL, {
        name,
      });

      return res.data;
    } catch (error) {
      const err = error as AxiosError
      return err.message;
    }
  }
);

const initialState: { data: Person[]; status: "ready" | "loading" } = {
  data: [],
  status: "ready",
};

export const peopleSlice = createSlice({
  name: "addPerson",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      const newPerson: Person = {
        createdAt: `${new Date()}`,
        name: action.payload.name,
        iban: "",
        price: 0,
        id: `${new Date()}`,
      };

      state.data.push(newPerson);
    },
    removePerson: (state, action) => {
      const newData = state.data.filter((person) => person.id !== action.payload.id)
      return state = {
        status: "ready",
        data: newData
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postPerson.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(postPerson.fulfilled, (state, action) => {
      state.status = "ready";
      const person = { ...action.payload, price: 0 };

      state.data.push(person);
    });
    builder.addCase(postPerson.rejected, (_state, action) => {
      console.log(action.payload);
    });
  },
});

export const { addPerson, removePerson } = peopleSlice.actions;

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
    const { data } = people;
    const peopleArray = [];
    for (let i = 0; i < data.length; i++) {
      const priceArray = [];
      for (let j = 0; j < itemList.length; j++) {
        for (let k = 0; k < itemList[j].people.length; k++) {
          if (data[i].id === itemList[j].people[k].id) {
            priceArray.push(parseFloat(`${itemList[j].people[k].price}`));
          }
        }
      }
      const sum = !!priceArray.length
        ? priceArray.reduce((acc, value) => acc + value)
        : 0;
      peopleArray.push({
        id: data[i].id,
        key: data[i].id,
        name: data[i].name,
        iban: data[i].iban,
        price: `${sum.toFixed(2)}$`,
        action: 'action'
      });
    }
    return peopleArray;
  }
);
