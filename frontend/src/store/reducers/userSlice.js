import { createSlice } from '@reduxjs/toolkit';
import { addNewUser, getUserWithToken } from '../actions/userAction';

const initialState = {
    userDetails: null,
    isLoading: false,
    isError: false,
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
        builder
            .addCase(addNewUser.pending, (state) => {
                state.userDetails = null;
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(addNewUser.rejected, (state) => {
                state.userDetails = null;
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.userDetails = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getUserWithToken.pending, (state) => {
                state.userDetails = null;
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getUserWithToken.rejected, (state) => {
                state.userDetails = null;
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getUserWithToken.fulfilled, (state, action) => {
                state.userDetails = action.payload;
                state.isLoading = false;
                state.isError = false;
            });
    },
});

export const { setUserDetails } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
