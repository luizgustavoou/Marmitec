import { useCookies } from "vue3-cookies";
import { authAPI } from "@/network/api";
import { Profile, Token, User } from "@/types/Auth";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

import jwt_decode from "jwt-decode";

export const useUserStore = defineStore("user", () => {
  const { cookies } = useCookies();

  const profile = reactive({
    id: null,
    name: "",
    email: "",
  });

  async function signIn(user: User): Promise<Profile | null> {
    let decoded: Profile | null;
    
    try {
      const res = await authAPI().post("", user);

      decoded = jwt_decode(res.data.access_token);

      const token: Token = res.data;

      cookies.set("access_token", token.access_token);
      cookies.set("refresh_token", token.refresh_token);

      Object.assign(profile, decoded);
    } catch (e) {
      throw e;
    }

    return decoded;
  }

  return { profile, signIn };
});
