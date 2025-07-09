import { createContext } from "react";
import { useAuthType } from "./types/useAuth";

export const AuthContext = createContext<useAuthType | null>(null);