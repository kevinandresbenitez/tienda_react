import { useEffect, useState } from "react";
import { Product } from "../../../models/product/index.ts";



/**
 * Custom hook for managing the shopping cart.
 * 
 * This hook provides functionality to manage a shopping cart's state, including adding and removing products, checking if the cart is empty, and persisting the cart's state in local storage.
 * 
 * **Returns:**
 * An object containing:
 * - `productsInStorage`: An array of `Product` objects currently stored in the cart. This represents the state of the cart.
 * - `addProductToTrolley`: A function that accepts a `Product` object and adds it to the cart. It updates both the local state and local storage.
 * - `removeProductOnTrolley`: A function that accepts a `Product` object and removes it from the cart. It updates both the local state and local storage.
 * - `isTrolleyEmpty`: A function that returns a boolean indicating whether the cart is empty.
 * 
 * **Usage Example:**
 * ```tsx
 * import React from 'react';
 * import { CartHook } from './path/to/TrolleyHook';
 * 
 * const MyComponent = () => {
 *   const { productsInStorage, addProductToTrolley, removeProductOnTrolley, isTrolleyEmpty } = CartHook();
 * 
 *   const handleAddProduct = () => {
 *     const newProduct = { id: 1, name: 'Sample Product' }; // Example product
 *     addProductToTrolley(newProduct);
 *   };
 * 
 *   return (
 *     <div>
 *       <h2>Cart Status</h2>
 *       <p>{isTrolleyEmpty() ? 'Your cart is empty.' : `You have ${productsInStorage.length} items in your cart.`}</p>
 *       <button onClick={handleAddProduct}>Add Sample Product</button>
 *     </div>
 *   );
 * };
 * 
 * export default MyComponent;
 * ```
 * 
 * **Functions:**
 * - `addProductToStorage(product: Product): void`
 *   - Adds a `Product` object to the cart. Updates the cart state and persists the change to local storage.
 * 
 * - `isTrolleyEmpty(): boolean`
 *   - Returns `true` if the cart is empty (i.e., `productsInStorage` array has a length of 0); otherwise, returns `false`.
 * 
 * - `removeProductToStorage(product: Product): void`
 *   - Removes a `Product` object from the cart. Updates the cart state and persists the change to local storage.
 * 
 * - `getProductsFromLocalStorage(): Product[]`
 *   - Retrieves and parses the array of `Product` objects from local storage. Returns an empty array if no products are found.
 * 
 * - `setProductsOnLocalStorage(products: Product[]): void`
 *   - Saves an array of `Product` objects to local storage. This is used internally to persist changes made to the cart.
 * 
 * - `addProductToLocalStorage(product: Product): void`
 *   - Adds a `Product` object to local storage. If no products are currently stored, initializes local storage with an empty array before adding the new product.
 * 
 * - `removeProductOnLocalStorage(product: Product): void`
 *   - Removes a `Product` object from local storage. Updates the stored array by filtering out the specified product.
 * 
 * - `cleanStorage(): void`
 *   - Clears the local storage by removing the `products` item. This is used to empty the cart and remove all stored cart data.
 * 
 * @returns {{
 *   productsInStorage: Product[],         
 *   addProductToCart: Function,        
 *   removeProductOnCart: Function,
 *   isCartEmpty: Function
 * }}
 */
export function CartHook(){

    const [productsInStorage,setProductsOnStorage] = useState<Product[]>([]) 

    useEffect(()=>{
        setProductsOnStorage(getProductsFromLocalStorage())
    },[])

    /**
     * add a product in local storage and update the array from products "productsInStorage"
     * @param product 
     */
    function addProductToStorage(product:Product):void{
        addProductToLocalStorage(product);
        setProductsOnStorage([...productsInStorage,product]);
    }

    /**
     * return boolean
     */
    function isCartEmpty():boolean{
        return (productsInStorage.length == 0 )
    }

    /**
     * remove a product in local storage and update the array from products "productsInStorage"
     * @param product 
     */
    function removeProductToStorage(product:Product):void{
        removeProductOnLocalStorage(product);
        setProductsOnStorage(productsInStorage.filter((obj:Product)=> obj != product));
    }

    /**
     * @param Product[] from local storage
     */
    function getProductsFromLocalStorage():Product[]{
        let products = localStorage.getItem("products");

        if(products == null){
            return [];
        }
        // Parce to Products
        let productsFromStorage = JSON.parse(products).map((product:Product)=>{return Product.copy(product)})

        return productsFromStorage
    }

    /**
     * 
     * @param products[] are added in local storage 
     */
    function setProductsOnLocalStorage(products:Product[]):void{
        localStorage.setItem("products",JSON.stringify(products));
    }

    /**
     * 
     * @param product is added in local storage 
     */
    function addProductToLocalStorage(product:Product):void{
        let products = localStorage.getItem("products");

        if(products == null){
            setProductsOnLocalStorage([])
        }else{            
            let storage = getProductsFromLocalStorage();
            storage.push(product);
            setProductsOnLocalStorage(storage);
        }
    }


    /**
     * 
     * @param product is remove from local storage 
     */
    function removeProductOnLocalStorage(product:Product):void{
        setProductsOnLocalStorage(productsInStorage.filter((obj:Product)=> obj != product))
    }

    /**
     * clean the local storage
     * 
     */
    function cleanStorage():void{
        localStorage.removeItem('products');
    }


    return {productsInStorage,addProductToCart:addProductToStorage,removeProductOnCart:removeProductToStorage,isCartEmpty}



}