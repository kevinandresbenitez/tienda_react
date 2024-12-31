import React from "react";

import {CartContextType} from './types/cartContext.ts'

export const  CartContext = React.createContext<CartContextType | undefined>(undefined);
