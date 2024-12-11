import React, { useEffect } from "react";
import { useState } from "react";
import { User } from "../../../models/user";


export default function AuthHook(){

    const [userSession,setUserSession] = useState<User | null>(null)
    
    useEffect(()=>{
        User.getUserInfo().then((dataUser)=>{setUserSession(dataUser)})
    },[])


    
    function isLogged():boolean{
        return userSession != null;
    }

    function signIn(){}

    function signUp(){}

    function signOut(){}

}