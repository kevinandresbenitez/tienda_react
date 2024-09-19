import { useCartType } from "./useCartType";
import { useCartDrawerType } from "./useCartDrawerType";

export interface CartContextType extends useCartType, useCartDrawerType {}