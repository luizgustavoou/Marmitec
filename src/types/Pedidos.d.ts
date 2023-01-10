import type { Form } from "@/types/Forms";

export interface IPedido {
  nomeEntregador: string;
  statusPedido: 1 | 2 | 3;
  canceladoPedido: 0 | 1;
  descPedido: string;
  nomeUsuario: string;
  endUsuario: string;
  telUsuario: string;
  arrozLeite: number;
  arrozRefo: number;
  bisSuiAce: number;
  feijao: number;
  figaAce: number;
  fraAssado: number;
  fraMilanesa: number;
  fraMolho: number;
  legSalte: number;
  macaCozida: number;
  macarrao: number;
  salaCrua: number;
}

export type IPedidos = Array<IPedido>;
