import React from "react";
import { CartContext } from "../context.ts";
import { useCartType } from "../types/useCart.ts";




export const useCart = ():useCartType => { 
    const context = React.useContext(CartContext);

    if (context === undefined) {
        throw new Error("useTrolley must be used within a TrolleyProvider");

    }


    return context;
    
}
