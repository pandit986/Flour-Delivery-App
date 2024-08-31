// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from "../screens/header/card/cartSlice"
import locationReducer from "../screens/header/location/locationSlice"
import cartSlice from '../screens/product-detail-page/action/cartSlice'

const rootReducer = combineReducers({
    cart: cartReducer,
    location: locationReducer,
    shoping_card: cartSlice,
});

export default rootReducer;
