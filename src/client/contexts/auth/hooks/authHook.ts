
import { useContext } from "react";
import {AuthContext} from "../context.ts";
import { useAuthHookType } from "../types/useAuthHook.ts";

export const useAuht = ():useAuthHookType => { 
    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error("useAuht must be used within a auhtProvider");

    }

    return context;
    
}