import { CryptService } from "../../services/crypt/crypt.service";
import { JWTService } from "../../services/jwt/jwt.service";
import { ICreateUserRequestDTO } from "../users/dtos/ICreateUserRequestDTO";
import { UserService } from "../users/user.service";

//chave: 3A14D22CB3E05589F6A068A2A83CD92293BD9D8475E597E0CE85008B24871ED3
//token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJpYXQiOjE2OTEwMTIxMzQsImV4cCI6MTY5MTA5ODUzNH0.Sk2ZhJjkBApW1D6bUnsBSRUEbLaOg_kW3XZF4kxAR2k
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly cryptService: CryptService,
    private readonly jwtService: JWTService
  ) { }

  async login(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);

    if (!user) throw new Error("Username not found.");

    const checkPassword = await this.cryptService.comparePassword(
      password,
      user.password
    );

    if (!checkPassword) throw new Error("Error validating password.");

    const token = await this.jwtService.sign({
      user: {
        id: user?.id,
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
        adress: user?.adress,
        phone: user?.phone,
      }
    });

    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;

    return { user, token };
  }

  async signup(createUserRequestDTO: ICreateUserRequestDTO) {
    const passwordHash = await this.cryptService.generateHash(
      createUserRequestDTO.password
    );

    const user = await this.userService.createUser({
      email: createUserRequestDTO.email,
      password: passwordHash,
      firstName: createUserRequestDTO.firstName,
      lastName: createUserRequestDTO.lastName,
      adress: createUserRequestDTO.adress,
      phone: createUserRequestDTO.phone,
    });

    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;

    const token = await this.jwtService.sign({
      user: {
        id: user?.id,
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
        adress: user?.adress,
        phone: user?.phone,
      }
    });

    return { user, token };
  }
}
