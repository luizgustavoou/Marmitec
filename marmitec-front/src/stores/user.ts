
import { Profile, User } from "@/types/Auth";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const profile = reactive({
    adress: "",
    email: "",
    firstName: "",
    id: null,
    lastName: "",
    phone: ""
  });

  function setProfile(newProfile: Profile) {
    Object.assign(profile, newProfile);
  }

  return { profile, setProfile };
});
