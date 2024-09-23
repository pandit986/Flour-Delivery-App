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
        updateItemQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.items.find(item => item.productId === productId);
            if (item) {
                item.quantity = quantity;
            }
        },
        removeItemFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.productId !== productId);
        },
    },
});

export const { addToCart, updateItemQuantity, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;