import { Product } from "../models/product";

export type useTrolleyInContextType = {
    productsInStorage:Product[],
    addProductToTrolley:(product:Product)=>void,
    removeProductOnTrolley:(product:Product)=>void,
    isDrawerEnabled:Boolean,
    isTrolleyEmpty:()=>boolean,
    enableDrawer:()=>void,
    disableDrawer:()=>void}