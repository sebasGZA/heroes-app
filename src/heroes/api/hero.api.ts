import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_API_URL;

export const heroApi = axios.create({
    baseURL: `${BASE_API_URL}/api/heroes`
})