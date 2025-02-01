import axios from 'axios';

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const createShortId = async (url) => {
    const response = await axios.post(`${backend_url}/url`, {
        url,
    });
    return response.data;
};

export const getLongUrl = async (shortId) => {
    const response = await axios.get(`${backend_url}/url/${shortId}`);
    return response;
};

export const getAnalytics = async (shortId) => {
    const response = await axios.get(`${backend_url}/url/analytics/${shortId}`);
    return response;
};
