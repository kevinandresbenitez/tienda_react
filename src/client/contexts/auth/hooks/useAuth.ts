
import { useContext } from "react";
import {AuthContext} from "../context.ts";
import { useAuthType } from "../types/useAuth.ts";

export const useAuth = ():useAuthType => { 
    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error("useAuth must be used within a authProvider");

    }

    return context;
    
}