import { Product } from "../../../models/product";



export interface useCartType {
    productsInStorage: Product[];
    addProductToCart: (product: Product) => void;
    removeProductOnCart: (product: Product) => void;
    isCartEmpty: () => boolean;

}