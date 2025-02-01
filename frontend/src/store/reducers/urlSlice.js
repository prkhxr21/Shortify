import { createSlice } from '@reduxjs/toolkit';
import {
    createShortUrl,
    getAnalyticsAction,
    getLongUrlAction,
} from '../actions/urlAction';

const initialState = {
    shortId: null,
    longUrl: null,
    analytics: null,
    isLoading: false,
    isError: false,
};

const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        setShortUrl: (state, action) => {
            state.shortId = action.payload;
        },
        setLongUrl: (state, action) => {
            state.longUrl = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createShortUrl.pending, (state) => {
                state.shortId = null;
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createShortUrl.rejected, (state) => {
                state.shortId = null;
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(createShortUrl.fulfilled, (state, action) => {
                state.shortId = action.payload.id;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getLongUrlAction.pending, (state) => {
                state.shortId = null;
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getLongUrlAction.rejected, (state) => {
                state.shortId = null;
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getLongUrlAction.fulfilled, (state, action) => {
                state.longUrl = action.payload.redirectUrl;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getAnalyticsAction.pending, (state) => {
                state.analytics = null;
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getAnalyticsAction.rejected, (state) => {
                state.analytics = null;
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getAnalyticsAction.fulfilled, (state, action) => {
                state.analytics = action.payload;
                state.isLoading = false;
                state.isError = false;
            });
    },
});

export const { setLongUrl, setShortUrl } = urlSlice.actions;

export const urlSelector = (state) => state.url;

export default urlSlice.reducer;
