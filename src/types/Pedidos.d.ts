import type { Form } from "@/types/Forms";

export interface IPedido {
  idPedido: number;
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

type nameAction = "added" | "removed" | "moved";

interface objAction {
  element: IPedido;
  newIndex?: number;
  oldIndex?: number;
}

export type objChange = Record<nameAction, objAction>;

const t: objChange;

const t2: teste;

export type IPedidos = Array<IPedido>;
