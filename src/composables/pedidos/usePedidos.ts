import { pedidosAPI } from "@/network/api";
import { Form } from "@/types/Forms";
import { IPedido } from "@/types/Pedidos";
import { AxiosResponse } from "axios";

export function usePedidos() {
  async function getPedidos(): Promise<AxiosResponse<IPedido[]>> {
    const res = await pedidosAPI().get<IPedido[]>("");

    return res;
  }

  async function addPedido(pedido: Form) {
    const res = await pedidosAPI().post("", pedido);

    return res;
  }

  async function changeStatusPedido(id: number, newStatus: 1 | 2 | 3) {
    const statusPedidoURL = `status/${id}`;

    const res = await pedidosAPI().put(statusPedidoURL, { newStatus });

    return res;
  }

  return { addPedido, getPedidos, changeStatusPedido };
}
