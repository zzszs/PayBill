import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { Person } from '../../types/types'
import { RootState } from '../store'

const initialState: Person[] = []

export const peopleSlice = createSlice({
    name: 'addPerson',
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<{name: string}>) => {
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

export const getPersonsForItem = createSelector(
    [
        (state: RootState) => state.people,
        (_state: RootState, peopleFromItem) => peopleFromItem
    ],
    (people, peopleFromItem) => {
        const peopleIds = peopleFromItem.map((person: Person) => person.id)
        const options = people.filter((person) => !peopleIds.includes(person.id)).map((person) => ({
            label: person.name,
            value: JSON.stringify(person)
        }))

        return options
    } 
    )