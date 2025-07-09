import { User } from "../../../models/user";

export interface useAuthType{
    userSession: User | null,
    isLogged:() => Boolean,
    signIn:() => void,
    signOut:() => void,
    signUp:() => void
}