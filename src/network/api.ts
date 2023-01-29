import axios, { AxiosInstance } from "axios";

const api = (protocol: "http" | "ws", url: string = ""): AxiosInstance => {
  const host = "localhost:8124";

  return axios.create({
    baseURL: `${protocol}://${host}/${url}`,
  });
};

export const pedidosAPI = () => {
  return api("http", "pedidos");
};

export const authAPI = () => {
  return api("http", "auth");
};
