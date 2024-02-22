import axios from 'axios';

export const addUser = async (user) => {
    try {
        const data = await axios.post(
            'http://localhost:3000/user/signup',
            user
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
