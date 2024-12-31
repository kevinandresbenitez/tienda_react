
import React from "react";
import { CartContext } from "../context.ts";
import { useDrawerType } from "../types/useDrawer.ts";


export const useDrawer = ():useDrawerType => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error("useDrawer must be used within a cart provider");
    }

    return context;
};

