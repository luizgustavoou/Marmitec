
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

  function $reset() {
    profile.adress = "";
    profile.email = "";
    profile.firstName = "";
    profile.id = null;
    profile.lastName = "";
    profile.phone = "";
  }

  return { profile, setProfile, $reset };
});
