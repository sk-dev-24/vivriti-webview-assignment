import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    details: {}
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.status = true;
            state.details = action.payload;
        },
        logOut: (state) => {
            state.status = false;
            state.details = {};
        }
    },
})

export const { logIn, logOut } = accountSlice.actions;

export default accountSlice.reducer;