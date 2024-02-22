import { createAsyncThunk } from '@reduxjs/toolkit';
import { createShortId, getAnalytics, getLongUrl } from '../../services/urlApi';

export const createShortUrl = createAsyncThunk(
    'url/createShortUrl',
    async (url) => {
        const response = await createShortId(url);
        return response;
    }
);

export const getLongUrlAction = createAsyncThunk(
    'url/getLongUrl',
    async (shortId) => {
        const response = await getLongUrl(shortId);
        return response?.data;
    }
);

export const getAnalyticsAction = createAsyncThunk(
    'url/getAnalytics',
    async (shortId) => {
        const response = await getAnalytics(shortId);
        return response?.data;
    }
);
