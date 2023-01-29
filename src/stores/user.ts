import { authAPI } from "@/network/api";
import { Profile, User } from "@/types/Auth";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

import jwt_decode from "jwt-decode";

export const useUserStore = defineStore("user", () => {
  const profile = reactive({
    id: null,
    name: "",
    email: "",
  });

  async function signIn(user: User): Promise<Profile | null> {
    // return authAPI()
    //   .post("", user)
    //   .then((res) => {
    //     return jwt_decode(res.data.access_token);
    //   });

    let decoded: Profile | null;
    try {
      const res = await authAPI().post("", user);

      decoded = jwt_decode(res.data.access_token);
    } catch (e) {
      throw e;
    }

    return decoded;
  }

  return { profile, signIn };
});
