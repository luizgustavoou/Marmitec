import { api } from "@/network/api";
import { Form } from "@/types/Forms";
import { IPedido } from "@/types/Pedidos";
import { AxiosResponse } from "axios";

export function usePedidos() {
  const url = "/orders";
  
  async function getPedidos(): Promise<AxiosResponse<IPedido[]>> {
    const res = await api.get<IPedido[]>(url);

    return res;
  }

  async function addPedido(pedido: Form) {

    const res = await api.post(url, pedido);

    return res;
  }

  async function changeStatusPedido(id: number, newStatus: 1 | 2 | 3) {
    const res = await api.put(`${url}/status/${id}`, { newStatus });

    return res;
  }

  return { addPedido, getPedidos, changeStatusPedido };
}
