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
