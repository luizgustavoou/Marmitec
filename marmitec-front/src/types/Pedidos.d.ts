import type { Form } from "@/types/Forms";

export interface IForeignKeyUser {
  id: number;
  firstName: string | null;
  lastName: string | null;
  adress: string | null;
  phone: string | null;
}

export interface IForeignKeyDeliveryman {
  id: number;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
}

export interface IPedido {
  id: number;
  description: string | null;
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
  User: IForeignKeyUser | null;
  Deliveryman: IForeignKeyDeliveryman | null;
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
