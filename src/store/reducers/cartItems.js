import { createSlice } from "@reduxjs/toolkit";
const initialItemsState = {
  items: {
    1: {
      id: 1,
      name: "Pizza",
      price: 7,
      quantity: 4,
    },
  },
};
const cartItems = createSlice({
  name: "cartItems",
  initialState: initialItemsState,
  reducers: {
    addToCart(state, action) {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id].quantity++;
      } else {
        state.items[action.payload.id] = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        };
      }
    },
    increment(state, action) {
      state.items[action.payload].quantity++;
    },
    decrement(state, action) {
      state.items[action.payload].quantity--;
      if (state.items[action.payload].quantity === 0) {
        delete state.items[action.payload];
      }
    },
  },
});

export default cartItems.reducer;
export const cartItemsActions = cartItems.actions;
