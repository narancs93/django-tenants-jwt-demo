import { AuthData } from "./AuthData";

export interface State {
  auth: AuthData;
  api: {
    setAuth: (accessToken: string) => void;
    logout: () => void;
  };
}
