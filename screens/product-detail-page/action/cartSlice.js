import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
    items: [],
    value: true
};

const cartSlice = createSlice({
    name: 'shoping_card',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.items.push(payload)
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;