import { CartContext } from "./context.ts";
import React from "react";
import {hookCart} from "./hooks/useCartHook.ts";
import {hookDrawer} from "./hooks/useDrawerHook.ts";

import {CartProductDrawer} from '../../components/cart/drawerProducts/index.tsx'

/**
 * `CartProvider` component that wraps its children with a context provider 
 * for managing the cart and drawer states in the application.
 * 
 * This component provides access to the following hooks:
 * - `useCart`: For managing and accessing cart data and actions (e.g., adding/removing items).
 * - `useDrawer`: For controlling the state of the product drawer (e.g., opening/closing the drawer).
 * 
 * The context values are provided to any child components through the `CartContext`.
 * Child components can then consume these values using the `useCart` and `useDrawer` hooks.
 * 
 * **Usage:**
 * To use `useCart` and `useDrawer`, wrap your component tree with the `CartProvider` at a higher level.
 * Example:
 * 
 * ```tsx
 * <CartProvider>
 * <CartProductDrawer />
 *   <App />
 * </CartProvider>
 * ```
 * 
 * @param {React.ReactNode} children - The child components that will have access to the cart and drawer context.
 * 
 * @returns {JSX.Element} The rendered `CartContext.Provider` wrapping the child components, with the `CartProductDrawer` component.
 */
export const CartProvider = ({children}:{children:React.ReactNode}) => {

    return (
        <CartContext.Provider
            value={{
                ...hookDrawer(),
                ...hookCart()
        }}
        >
        <CartProductDrawer />
            {children}
        </CartContext.Provider>
    );
};
