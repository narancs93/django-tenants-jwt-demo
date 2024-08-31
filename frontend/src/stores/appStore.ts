import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { AuthTokenPayload } from "../interfaces/AuthTokenPayload";
import { State } from "../interfaces/AppStore";
import api from "../utils/api";

const useStore = create<State>((set) => ({
  auth: {
    token: "",
    user: undefined,
  },
  api: {
    setAuth: (accessToken: string) =>
      set(() => ({
        auth: {
          token: accessToken,
          user: (jwtDecode(accessToken) as AuthTokenPayload) ?? null,
        },
      })),
    logout: async () => {
      try {
        const response = await api.post("logout");
        console.log("Logout response", response);
      } catch (error) {
        console.error("Logout error:", error);
      }
    },
  },
}));

export default useStore;
