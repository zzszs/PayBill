import { createSlice } from '@reduxjs/toolkit'
import { ListItem } from '../../types/types'

const initialState: ListItem[] = [] 

export const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem: ListItem = {
                name: action.payload.name,
                price: parseFloat(action.payload.price),
                people: []
            }
            state.push(newItem)
        }
    }
})

export const { addItem } = itemListSlice.actions

export default itemListSlice.reducer