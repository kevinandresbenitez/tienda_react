import { User } from "../../../models/user";

export interface useAuthHookType{
    userSession: User | null,
    isLogged:() => Boolean,
    signIn:() => void,
    signOut:() => void,
    signUp:() => void
}