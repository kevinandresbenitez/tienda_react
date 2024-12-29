
import React from "react";
import { CartContext } from "./cartContext.tsx";
import { useCartDrawerType } from "../../types/cart/useCartDrawerType.tsx";


export const useCartDrawer = ():useCartDrawerType => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error("useDrawer must be used within a TrolleyProvider");
    }
    return {
        isDrawerEnabled: context.isDrawerEnabled,
        enableDrawer: context.enableDrawer,
        disableDrawer: context.disableDrawer
    };
};