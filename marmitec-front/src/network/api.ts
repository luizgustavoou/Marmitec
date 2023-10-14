import axios, { AxiosInstance } from "axios";
import { cookiesService } from '@/services/cookies';

const host = process.env.VUE_APP_API_HOST;
const port = process.env.VUE_APP_API_PORT;

export const domain = `${host}:${port}`;

export const api = (protocol: "http" | "ws", url: string = ""): AxiosInstance => {

  const access_token = cookiesService.getCookies("access_token");

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${protocol}://${domain}/${url}`,
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });


  return axiosInstance;
};


export const pedidosAPI = () => {
  return api("http", "orders");
};

export const authAPI = () => {
  return api("http", "auth");
};
