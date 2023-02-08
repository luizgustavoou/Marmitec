import type { Form } from "@/types/Forms";

export interface IPedido {
  id: number;
  description: number | null;
  fraMilanesa: number | null;
  fraAssado: number | null;
  figaAce: number | null;
  bisSuiAce: number | null;
  fraMolho: number | null;
  arrozRefo: number | null;
  arrozLeite: number | null;
  macarrao: number | null;
  legSalte: number | null;
  salaCrua: number | null;
  macaCozida: number | null;
  feijao: number | null;
  status: number;
  canceled: number;
  createdAt: string;
  updatedAt: string;
  UserId: number | null;
  DeliverymanId: number | null;
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
