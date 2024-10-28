import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' }); // Adjust as necessary

export const register = (userData) => API.post('/users/register', userData);
export const verifyOTP = (otpData) => API.post('/users/verify', otpData);
