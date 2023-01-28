import { pedidosAPI } from "@/network/api";
import { Form } from "@/types/Forms";

export function usePedidos() {
  async function getPedidos() {
    const req = await pedidosAPI().get("");

    return req.data[0];
  }

  async function addPedido(pedido: Form) {
    const req = await pedidosAPI().post("", pedido);

    return req;
  }

  async function changeStatusPedido(id: number, newStatus: 1 | 2 | 3) {
    const statusPedidoURL = `status/${id}`;

    const req = await pedidosAPI().put(statusPedidoURL, { newStatus });

    return req;
  }

  return { addPedido, getPedidos, changeStatusPedido };
}
