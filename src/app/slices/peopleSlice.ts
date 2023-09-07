import { createSlice } from '@reduxjs/toolkit'
import { Person } from '../../types/types'

const initialState: Person[] = []

export const peopleSlice = createSlice({
    name: 'addPerson',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            const newPerson: Person = {
                createdAt: `${new Date()}`,
                name: action.payload.name,
                iban: '',
                price: 0,
                id: `${new Date()}`
            }

            state.push(newPerson)
        }
    }
})

export const { addPerson } = peopleSlice.actions

export default peopleSlice.reducer