import { configureStore } from "@reduxjs/toolkit";
import itemListReducer from './slices/itemListSlice'
import peopleReducer from './slices/peopleSlice'

export const store = configureStore({
    reducer: {
        itemList: itemListReducer,
        people: peopleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch