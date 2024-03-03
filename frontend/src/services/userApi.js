import axios from 'axios';
import Cookies from 'js-cookie';

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const addUser = async (user) => {
    try {
        const data = await axios.post(`${backend_url}/user/signup`, user);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const loginUserWithToken = async () => {
    try {
        const token = Cookies.get('access-token');
        // console.log('token', token);

        const data = await axios.get(`${backend_url}/user/getUser`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
