import proteinas from "@/utils/proteinas";
import acompanhamentos from "@/utils/acompanhamentos";
// type Proteinas<Type> = {
//   [Property in keyof Type]: number;
// };

// type t2 = Proteinas<typeof proteinas>;

// const t3: t2;

//ou

// export type Proteinas = Record<keyof typeof proteinas, number>;

//ou

export type Proteinas = {
  [Property in keyof typeof proteinas]: number;
};

export type Acompanhamentos = {
  [Property in keyof typeof acompanhamentos]: number;
};

export interface Form {
  proteinas: Proteinas;
  feijao: number;
  acompanhamentos: Acompanhamentos;
  description: string;
}
