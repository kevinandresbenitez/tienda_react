import React from "react";

import {CartContextType} from '../../types/cart/cartContext.tsx'

export const  CartContext = React.createContext<CartContextType | undefined>(undefined);
