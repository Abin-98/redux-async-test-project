import { configureStore } from "@reduxjs/toolkit";
import cartShowReducer from './reducers/cartShow'

const store = configureStore( {
    reducer: {
        cartShow: cartShowReducer
    }
})

export default store