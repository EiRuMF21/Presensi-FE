import { create } from "zustand";
import axios from "axios";

interface AuthState {
  user: any;
  role: string | null;
  token: string | null;
  setUser: (user: any, role: string | null) => void;
  setRole: (role: string) => void;
  setToken: (token: string) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  token: localStorage.getItem("token"),
  setUser: (user, role) => set({ user, role }),
  setRole: (role: string) => set({ role }),
  setToken: (token) => set({ token }),
  clearUser: () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    set({ user: null, role: null, token: null });
  },
}));
