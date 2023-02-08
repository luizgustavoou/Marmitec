import axios, { AxiosInstance } from "axios";

const host = process.env.VUE_APP_HOST;
const port = process.env.VUE_APP_PORT;

export const domain = `${host}:${port}`;

export const api = (protocol: "http" | "ws", url: string = ""): AxiosInstance => {
  return axios.create({
    baseURL: `${protocol}://${domain}/${url}`,
  });
};

export const pedidosAPI = () => {
  return api("http", "orders");
};

export const authAPI = () => {
  return api("http", "auth");
};
