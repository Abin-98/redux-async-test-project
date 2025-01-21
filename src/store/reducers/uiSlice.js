import { createSlice } from "@reduxjs/toolkit";
const initialUIState = {isLoading: false, success: false, fail: false}
const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: initialUIState,
    reducers: {
        loading(state, action){
            state.isLoading=action.payload;
        },
        didSucceed(state,action){
            state.success=action.payload;
        },
        didFail(state,action){
            state.fail=action.payload;
        }
    }
})

export default uiSlice.reducer
export const uiActions = uiSlice.actions