import jwt from "jsonwebtoken";

const secret =
  "3A14D22CB3E05589F6A068A2A83CD92293BD9D8475E597E0CE85008B24871ED3";

export const sign = (payload: any) =>
  jwt.sign(payload, secret, { expiresIn: 86400 });

export const verify = (token: string) => jwt.verify(token, secret);
