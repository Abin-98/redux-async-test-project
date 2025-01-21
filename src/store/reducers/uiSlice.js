import { createSlice } from "@reduxjs/toolkit";
const initialUIState = {notification: null}
const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: initialUIState,
    reducers: {
        notify(state, action){
            state.notification=action.payload;
        }
    }
})

export default uiSlice.reducer
export const uiActions = uiSlice.actions