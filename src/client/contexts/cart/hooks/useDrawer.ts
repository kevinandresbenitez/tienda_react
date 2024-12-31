
import React from "react";
import { CartContext } from "../context.ts";
import { useDrawerType } from "../types/useDrawer.ts";

/**
 * Custom hook to interact with the cart's product drawer context.
 * 
 * This hook provides access to the drawer's state, such as whether the drawer is open or closed, 
 * and other related actions. It must be used within the context of a `CartProvider`.
 * 
 * If used outside of the `CartProvider`, an error will be thrown:
 * 
 * ```plaintext
 * Error: useDrawer must be used within a cart provider
 * ```
 * 
 * @returns {useDrawerType} The current context value containing the drawer state and actions.
 * 
 * @throws {Error} If used outside of a `CartProvider`, an error is thrown.
 */
export const useDrawer = ():useDrawerType => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error("useDrawer must be used within a cart provider");
    }

    return context;
};

