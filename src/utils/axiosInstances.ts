import axios from 'axios';

export const dingerApi = axios.create({
  baseURL: import.meta.env.VITE_PAYMENT_PREBUILT_BASE_URL,
});
