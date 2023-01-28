import { pedidosAPI } from "@/network/api";

export function usePedidos() {
  async function getPedidos() {
    const req = await pedidosAPI().get("");

    return req.data[0];
  }

  async function addPedido(pedido: any) {
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
