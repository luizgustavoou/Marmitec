import { Model } from "sequelize";

export interface OrderRequest {
  proteinas: {
    fraMilanesa: number;
    fraAssado: number;
    figaAce: number;
    bisSuiAce: number;
    fraMolho: number;
  };
  acompanhamentos: {
    arrozRefo: number;
    arrozLeite: number;
    macarrao: number;
    legSalte: number;
    salaCrua: number;
    macaCozida: number;
  };
  feijao: number;
  description: string;
}

export interface TOrder {
  id: number;
  createdAt: number;
  updatedAt: number;
  description?: string;
  fraMilanesa?: number;
  fraAssado?: number;
  figaAce?: number;
  bisSuiAce?: number;
  fraMolho?: number;
  arrozRefo?: number;
  arrozLeite?: number;
  macarrao?: number;
  legSalte?: number;
  salaCrua?: number;
  macaCozida?: number;
  feijao?: number;
  status: number;
  canceled: number;
  UserId?: number;
  DeliverymanId?: number;
}

export interface OrderModel extends Model, TOrder {}
