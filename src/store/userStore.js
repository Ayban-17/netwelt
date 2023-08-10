import { create } from "zustand";

export const useUserStore = create((set) => ({
  userInfo: null,
  setUserInfo: (value) => {
    set(() => ({
      userInfo: value,
    }));
  },
}));