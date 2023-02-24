import bcrypt from "bcrypt";

export class CryptService {
  async comparePassword(password: string, passwordHash: string) {
    const checkPassword = await bcrypt.compareSync(password, passwordHash);

    return checkPassword;
  }

  async generateHash(content: string) {
    const saltRounds = 10;

    const hash = await bcrypt.hashSync(content, saltRounds);

    return hash;
  }
}
