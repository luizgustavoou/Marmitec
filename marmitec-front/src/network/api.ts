import axios, { AxiosInstance } from "axios";
import { cookiesService } from '@/services/cookies';

const host = process.env.VUE_APP_API_HOST;
const port = process.env.VUE_APP_API_PORT;

export const domain = `${host}:${port}`;

export const api: AxiosInstance = axios.create({
  baseURL: `http://${domain}`,
});

api.interceptors.request.use(
  config => {
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${cookiesService.getCookies("access_token")}`;

    }

    return config;

  }, error => {
    return Promise.reject(error);
  });


