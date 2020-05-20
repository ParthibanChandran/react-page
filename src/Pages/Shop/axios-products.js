import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://demo1916410.mockable.io'
});

export default instance;