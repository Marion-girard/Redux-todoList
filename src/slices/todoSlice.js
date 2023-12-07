import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name:'todo',
    intialState: {
        value:''
    },
    reducers: {
        incrementTodo: (state, action) => {
            state.value === action.payload
        }
    }
})

export default todoSlice.reducer
export const {incrementTodo} = todoSlice.actions
