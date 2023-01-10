import type { Form } from "@/types/Forms";

interface IPedido {
  arrozLeite: number;
  arrozRefo: number;
  bisSuiAce: number;
  canceladoPedido: number;
  descPedido: string;
  feijao: number;
  figaAce: number;
  fraAssado: number;
  fraMilanesa: number;
  fraMolho: number;
  idEntregador: number;
  idPedido: number;
  idUsuario: number;
  legSalte: number;
  macaCozida: number;
  macarrao: number;
  salaCrua: number;
  statusPedido: number;
}

export type IPedidos = Array<IPedido>;
