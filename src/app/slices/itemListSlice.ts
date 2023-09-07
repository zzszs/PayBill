import { createSlice } from '@reduxjs/toolkit'
import { ListItem } from '../../types/types'

const initialState: ListItem[] = [] 

export const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem: ListItem = {
                id: `${new Date()}`,
                name: action.payload.name,
                price: parseFloat(action.payload.price),
                people: []
            }
            state.push(newItem)
        },
        addPersonToItem: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload.id) {
                    state[i].people.push(action.payload.person)
                }
            }
        },
        changePersonSlice: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload.id) {
                    for (let j = 0; j < state[i].people.length; j++) {
                        if (state[i].people[j].id === action.payload.person.id) {
                            state[i].people[j] = action.payload.person
                        }
                    }
                }
            }
        }
    }
})

export const { addItem, addPersonToItem, changePersonSlice } = itemListSlice.actions

export default itemListSlice.reducer