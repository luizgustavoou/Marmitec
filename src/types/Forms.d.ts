interface Proteinas {
  fra_milanesa: number;
  fra_assado: number;
  figa_ace: number;
  bis_sui_ace: number;
  fra_molho: number;
}

export interface Form {
  proteinas: Proteinas;
  feijao: number;
  acompanhamentos: Array<string>;
  desc: string;
}
