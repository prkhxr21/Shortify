import axios from 'axios';

const backendServer = 'http://localhost:3001';

export default function api() {
    return axios.create({
        baseURL: backendServer,
    });
}
