import { pedidosAPI } from "@/network/api";
import { Form } from "@/types/Forms";

export function usePedidos() {
  async function getPedidos() {
    const res = await pedidosAPI().get("");

    return res.data[0];
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
