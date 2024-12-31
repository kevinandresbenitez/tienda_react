import { useCartType } from "./useCart";
import { useDrawerType } from "./useDrawer";


export interface CartContextType extends useCartType, useDrawerType {}