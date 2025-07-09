import { createContext } from "react";
import { useAuthHookType } from "./types/useAuthHook";

export const AuthContext = createContext<useAuthHookType | null>(null);