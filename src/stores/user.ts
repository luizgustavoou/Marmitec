import { authAPI } from "@/network/api";
import { User } from "@/types/Auth";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const profile = reactive({
    name: "",
  });

  async function signIn(user: User) {
    try {
      const res = await authAPI().post("", user);
      console.log(res);
    } catch (e) {
      console.log("Ocorreu um erro: " + e);
      throw e;
    } finally {
      console.log("Fim da autenticação!");
    }
  }

  return { profile, signIn };
});
