import { createSlice } from '@reduxjs/toolkit';
import { addNewUser } from '../actions/userAction';

const initialState = {
    userDetails: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addNewUser.fulfilled, (state, action) => {
            state.userDetails = action.payload;
        });
    },
});

export const { setUserDetails } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
