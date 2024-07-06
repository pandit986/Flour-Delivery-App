// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from "../screens/header/card/cartSlice"
import locationReducer from "../screens/header/location/locationSlice"

const rootReducer = combineReducers({
    cart: cartReducer,
    location: locationReducer
});

export default rootReducer;
