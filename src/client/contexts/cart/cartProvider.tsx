import { CartContext } from "./cartContext.tsx";
import React from "react";
import {CartDrawerHook,CartHook} from "./hooks/index.tsx";
import {CartProductDrawer} from '../../components/cart/productsDrawer/index.tsx'


export const CartProvider = ({children}:{children:any}) => {

    return (
        <CartContext.Provider
            value={{
                ...CartDrawerHook(),
                ...CartHook()
        }}
        >
        <CartProductDrawer />
            {children}
        </CartContext.Provider>
    );
};
