import axios from 'axios';

const backend_url = 'http://localhost:3000';

export const createShortId = async (url) => {
    try{
    const response = await axios.post(`${backend_url}/url`, {
        url,
    });

    return response.data;
    }catch (error) {
        console.error("Error creating short ID:", error.response?.data || error.message);
        throw error;
    }
};

export const getLongUrl = async (shortId) => {
    const response = await axios.get(`${backend_url}/url/${shortId}`);
    return response;
};

export const getAnalytics = async (shortId) => {
    const response = await axios.get(`${backend_url}/url/analytics/${shortId}`);
    return response;
};
