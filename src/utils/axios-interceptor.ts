import { notifications } from '@mantine/notifications';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { startsWith } from 'lodash-es';
import { removeAuth } from './auth';

const API_URL = import.meta.env.VITE_API_URL ?? '';

export const setupResponseInterceptor = () => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error?.response?.status && error?.response?.status === 401) {
        removeAuth();
      }

      if (
        error?.response?.status &&
        error?.response?.status >= 402 &&
        error?.response?.status <= 499
      ) {
        notifications.show({
          color: 'red',
          message: (error?.response?.data as { message: string }).message,
        });
      }

      return Promise.reject();
    }
  );
};

export const setupRequestInterceptor = () => {
  axios.interceptors.request.use(
    (config: any) => {
      const request = { ...config };
      if (!startsWith(request.url, 'http')) {
        request.url = `${API_URL}${request.url}`;
      }

      return request;
    },
    (error) => Promise.reject(error)
  );
};
