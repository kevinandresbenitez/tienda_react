import { AuthContext } from "./context.ts";
import React from "react";
import {useAuthHook} from "./hooks/useAuthHook.ts";


export const AuhtProvider = ({children}:{children:React.ReactNode}) => {

    return (
        <AuthContext.Provider value={{ ...useAuthHook() }}>
            {children}
        </AuthContext.Provider>
    );
};
