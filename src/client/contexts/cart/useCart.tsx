import { useCartType } from "../../types/cart/useCartType.tsx";
import React from "react";
import { CartContext } from "./cartContext.tsx";



export const useCart = ():useCartType => { 
    const context = React.useContext(CartContext);

    if (context === undefined) {
        throw new Error("useTrolley must be used within a TrolleyProvider");

    }

    return {
        productsInStorage: context.productsInStorage,
        addProductToCart: context.addProductToCart,
        removeProductOnCart: context.removeProductOnCart,
        isCartEmpty: context.isCartEmpty
    };
    
}