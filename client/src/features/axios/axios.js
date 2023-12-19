import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8082'
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Fetch the token from localStorage or any other source
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);