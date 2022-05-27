import { useContext } from "react";
import { AuthContext } from "../states/context/user/AuthContext";

export default function useAuth() {
  return useContext(AuthContext);
}
