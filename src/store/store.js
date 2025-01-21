import { configureStore } from "@reduxjs/toolkit";
import cartShowReducer from './reducers/cartShow'
import cartItemsReducer from './reducers/cartItems'
import uiReducer from './reducers/uiSlice'

const store = configureStore( {
    reducer: {
        cartShow: cartShowReducer,
        cartItems: cartItemsReducer,
        uiSlice: uiReducer
    }
})

export default store