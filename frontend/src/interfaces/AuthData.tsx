import { User } from "./User";

export interface AuthData {
  token: string;
  user?: User;
}
