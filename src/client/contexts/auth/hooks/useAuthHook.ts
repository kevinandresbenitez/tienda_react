import React, { useEffect } from "react";
import { useState } from "react";
import { User } from "../../../models/user";
import { useAuthHookType } from "../types/useAuthHook";


export function useAuthHook():useAuthHookType{
    const [userSession,setUserSession] = useState<User | null>(null)
    
    
    function isLogged():boolean{
        return userSession != null;
    }

    function signIn(){}

    function signUp(){}

    function signOut(){}


    return{
        userSession,
        isLogged,
        signIn,
        signOut,
        signUp
    }

}