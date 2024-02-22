import axios from 'axios';

export const createShortId = async (url) => {
    const response = await axios.post('http://localhost:3000/url', {
        url,
    });

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response.data);
        }, 1000);
    });
};

export const getLongUrl = async (shortId) => {
    const response = await axios.get(`http://localhost:3000/url/${shortId}`);
    return response;
};

export const getAnalytics = async (shortId) => {
    const response = await axios.get(
        `http://localhost:3000/url/analytics/${shortId}`
    );
    return response;
};
