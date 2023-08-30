import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export class CookiesService {
    setCookies(keyName: string, value: any) {
        cookies.set(keyName, value)
    }

    getCookies(keyName: string) {
        const cookie = cookies.get(keyName)

        return cookie;
    }

    existCookie(keyName: string) {
        return cookies.isKey(keyName);
    }
}