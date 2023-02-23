import { createSlice } from '@reduxjs/toolkit';

const initialState = {
value: 0,

};

export const counterSlice = createSlice ({
name: 'counter',
initialState,
reducers : {
    increment : (state) => {
state.value++

    },

    decrement : (state) => {
        if(state.value > 0)
        state.value--;

    },

 },
});

export const { addCounterToStore } = counterSlice.actions;
export default counterSlice.reducer;