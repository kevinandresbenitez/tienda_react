
import { Product } from "../../models/product";

export interface useTrolleyType {
    productsInStorage: Product[];
    addProductToTrolley: (product: Product) => void;
    removeProductOnTrolley: (product: Product) => void;
    isTrolleyEmpty: () => boolean;

}