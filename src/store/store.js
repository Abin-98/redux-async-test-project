import { configureStore } from "@reduxjs/toolkit";
import cartShowReducer from './reducers/cartShow'
import cartItemsReducer from './reducers/cartItems'

const store = configureStore( {
    reducer: {
        cartShow: cartShowReducer,
        cartItems: cartItemsReducer
    }
})

export default store