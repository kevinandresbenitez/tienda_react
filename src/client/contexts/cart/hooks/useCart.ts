import React from "react";
import { CartContext } from "../context.ts";
import { useCartType } from "../types/useCart.ts";



/**
 * Custom hook to interact with the cart context.
 * 
 * This hook provides access to the cart data and related actions, such as adding/removing items 
 * from the cart. It must be used within the context of a `CartProvider`.
 * 
 * **Important:** This hook must be used within the context of a `CartProvider`.
 * If used outside of the `CartProvider`, an error will be thrown:
 * 
 * @returns {useCartType} The current context value containing cart data and actions.
 * 
 * @throws {Error} If used outside of a `CartProvider`, an error is thrown.
 */
export const useCart = ():useCartType => { 
    const context = React.useContext(CartContext);

    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");

    }


    return context;
    
}
