import React, { useEffect } from "react";
import { useState } from "react";
import { User } from "../models/user/index.ts";
import { AuthService } from "../services/auth.service.ts";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


export interface useAuthType{
    userSession: User | null,
    isLogged: boolean,
    signIn: (credentials: { email: string, password: string }) => Promise<{ user: User | null, message: string }>,
    logOut:() => void,
    signUp:() => void
}


export function useAuthHook():useAuthType{
    const queryClient = useQueryClient();

    const { data: userSession = null } = useQuery({
        queryKey: ['userSession'],
        queryFn: async () => {
            const apiResponse = await AuthService.getProfile();
            return apiResponse.payload ? User.hydrate(apiResponse.payload) : null;
        },
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity,  
        gcTime: Infinity,     
    });

    const loginMutation = useMutation({
        mutationFn: async ({ email, password }:{ email: string, password: string }) => {
            const apiResponse = await AuthService.signIn(email, password);
            const user = apiResponse.payload ? User.hydrate(apiResponse.payload) : null;
            return { user, message: apiResponse.message };
        },
        
        onSuccess: (data) => {
            queryClient.setQueryData(['userSession'], data.user);
        }
    });

    const logoutMutation = useMutation({
        mutationFn: AuthService.logOut,
        onSuccess: () => {
            queryClient.setQueryData(['userSession'], null);
            queryClient.invalidateQueries({ queryKey: ['userSession'] });
        }
    });

    const signUp = ()=>{}



    return{
        userSession,
        isLogged:!!userSession,
        signIn: loginMutation.mutateAsync,
        logOut: logoutMutation.mutate,
        signUp
    }

}