import { User } from '../../types/Auth';
import { authAPI } from '../../network/api';
import { JWTService } from '../jwt/jwt.service';
import { CookiesService } from '../cookies/cookies.service';
import { useUserStore } from '@/stores/user';
import router from '@/router';

interface IAPISignIn {
    token: string;
    user: {
        adress: string;
        email: string;
        firstName: string;
        id: number;
        lastName: string;
        phone: string
    },
}

export class AuthService {
    constructor(private readonly jwtService: JWTService, private readonly cookiesService: CookiesService) { }

    private async requestSignIn(user: User): Promise<IAPISignIn> {
        const res = await authAPI().get<IAPISignIn>("login", {
            auth: {
                username: user.username,
                password: user.password
            }
        });

        const { data } = res;


        return data;
    }

    async signIn(user: User) {
        const userStore = useUserStore();

        try {
            const data = await this.requestSignIn(user);

            this.cookiesService.setCookies("access_token", data.token);
            userStore.setProfile(data.user);

            router.push("/home");



        } catch (e) {
            throw e;
        }

    }

    async logout() {
        const userStore = useUserStore();

        this.cookiesService.remove("access_token");
        this.cookiesService.remove("refresh_token");

        userStore.$reset();
        router.push("auth");
    }
}