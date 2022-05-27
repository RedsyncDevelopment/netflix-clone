import { User } from "firebase/auth";

export interface AuthContextInterface {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

export const defaultState = {
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false,
};
