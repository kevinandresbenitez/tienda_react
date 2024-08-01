import { Product } from "../models/product";

export type useTrolleyType = {productsInStorage:Product[],addProductToTrolley:(product:Product)=>void,removeProductOnTrolley:(product:Product)=>void}