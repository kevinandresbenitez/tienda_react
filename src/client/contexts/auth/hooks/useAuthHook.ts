import React, { useEffect } from "react";
import { useState } from "react";
import { User } from "../../../models/user";
import { useAuthType } from "../types/useAuth";


export function useAuthHook():useAuthType{
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