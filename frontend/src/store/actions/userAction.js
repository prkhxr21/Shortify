import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUser } from '../../services/userApi';

export const addNewUser = createAsyncThunk('user/addUser', async (user) => {
    const response = await addUser(user);
    return response?.data;
});
