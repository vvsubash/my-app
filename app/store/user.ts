import { defineStore } from "pinia";
export const useUserStore = defineStore("user", () => {
  const authenticated = ref(false);

  return { authenticated };
});
