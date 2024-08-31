import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
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