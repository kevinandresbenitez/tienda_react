import { useCartType } from "../../types/cart/useCartType.tsx";
import React from "react";
import { CartContext } from "./cartContext.tsx";



/**
 * `useTrolley` is a custom React hook that provides access to shopping cart-related state and actions from the `TrolleyContext`.
 * 
 * This hook allows components to interact with the shopping cart, including retrieving the products currently in the cart, adding and removing products, and checking if the cart is empty. 
 * It uses the `TrolleyContext` to access these functionalities and must be used within a `TrolleyProvider` to ensure the context is available.
 * 
 * **Returns:**
 * - An object with the following properties:
 *   - `productsInStorage` (Product[]): An array of products currently stored in the cart.
 *   - `addProductToTrolley` (function): A function that takes a `Product` object and adds it to the cart.
 *   - `removeProductOnTrolley` (function): A function that takes a `Product` object and removes it from the cart.
 *   - `isCartEmpty` (function): A function that returns a boolean indicating whether the cart is empty.
 * 
 * **Usage:**
 * To use `useCart`, ensure that your component is wrapped in a `TrolleyProvider`. This will provide the necessary context for the hook to function properly. You can then call `useTrolley` within your functional component to access the cart state and actions.
 * 
 * ```jsx
 * import React from 'react';
 * import { useCart } from './contexts/trolley/useTrolley';
 * 
 * const MyComponent = () => {
 *   const { productsInStorage, addProductToCart, removeProductOnCart, isCartEmpty } = useCart();
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
 * **Error Handling:**
 * - Throws an error if `useTrolley` is used outside of a `TrolleyProvider`. Ensure that your component is within the context provider to avoid this issue.
 * 
 * @throws {Error} Throws an error if `useTrolley` is used outside of a `TrolleyProvider`.
 * 
 * @hook
 */

export const useCart = ():useCartType => { 
    const context = React.useContext(CartContext);

    if (context === undefined) {
        throw new Error("useTrolley must be used within a TrolleyProvider");

    }

    return {
        productsInStorage: context.productsInStorage,
        addProductToCart: context.addProductToCart,
        removeProductOnCart: context.removeProductOnCart,
        isCartEmpty: context.isCartEmpty
    };
    
}