import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUser, loginUserWithToken } from '../../services/userApi';

export const addNewUser = createAsyncThunk('user/addUser', async (user) => {
    const response = await addUser(user);
    return response?.data;
});

export const getUserWithToken = createAsyncThunk(
    'user/getUserWithToken',
    async (token) => {
        const response = await loginUserWithToken(token);
        return response?.data;
    }
);
