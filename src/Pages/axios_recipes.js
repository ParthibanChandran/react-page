import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-page-c8956.firebaseio.com'
});

export default instance;