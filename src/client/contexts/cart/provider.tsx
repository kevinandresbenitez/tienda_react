import { CartContext } from "./context.ts";
import React from "react";
import {hookCart} from "./hooks/hookCart.ts";
import {hookDrawer} from "./hooks/hookDrawer.ts";

import {CartProductDrawer} from '../../components/cart/drawerProducts/index.tsx'


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
