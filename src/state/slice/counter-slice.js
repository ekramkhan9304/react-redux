import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: "Counter",
    initialState: initialCounterState,
    reducers: {
        Increment: (state) => {
            state.counter++;
        },
        Decrement: (state) => {
            state.counter--;
        },
        IncreaseBy: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        Toggle: (state) => {
            state.showCounter = !state.showCounter;
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;