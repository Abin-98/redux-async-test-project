import { createSlice } from "@reduxjs/toolkit";
const initialShowState = {show: false}
const cartShow = createSlice({
    name: 'cartShow',
    initialState: initialShowState,
    reducers: {
        toggleShow(state){
            state.show=!state.show
        }
    }
})

export default cartShow.reducer
export const cartActions = cartShow.actions