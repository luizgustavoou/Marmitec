import proteinas from "@/utils/proteinas";

// type Proteinas<Type> = {
//   [Property in keyof Type]: number;
// };

// type t2 = Proteinas<typeof proteinas>;

// const t3: t2;

type Proteinas = {
  [Property in keyof typeof proteinas]: number;
};

export interface Form {
  proteinas: Proteinas;
  feijao: number;
  acompanhamentos: Array<string>;
  desc: string;
}
