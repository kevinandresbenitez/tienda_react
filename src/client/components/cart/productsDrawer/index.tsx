import React, { useEffect } from "react";
import './index.less';
import { Product } from "../../../models/product/index.tsx";
import { useCart,useCartDrawer } from "../../../contexts/cart/index.tsx";
import { useCartDrawerType,useCartType} from "../../../types/cart/index.tsx";

import Button from "../../common/button/index.tsx";
import { CartProductItem } from "../productsItem/index.tsx";


/**
 * `TrolleyDrawer` is a component that displays a drawer with the list of products currently in the shopping cart (trolley).
 * 
 * This component shows a list of products that have been added to the trolley. If the trolley is empty, it hides the drawer content. Otherwise, it displays the products and provides an action button for purchasing the items.
 * 
 * **Features:**
 * - Displays the products currently in the trolley.
 * - Shows or hides based on the `isDrawerEnabled` state.
 * - Provides a button for purchasing the products, which can be hooked up to further actions.
 * 
 * **Returns:**
 * A `div` element styled as a drawer that:
 * - Shows the list of products in the trolley.
 * - Displays a purchase button if there are products in the trolley.
 * 
 * **Usage Example:**
 * ```tsx
 * import React from 'react';
 * import { CartProvider } from './path/to/CartProvider';
 * import { CartProductDrawer } from './path/to/CartProductDrawer';
 * 
 * const App = () => {
 *   return (
 *     <CartProvider>
 *       <CartProductDrawer />
 *       { Other components }
 *     </CartProvider>
 *   );
 * };
 * 
 * export default App;
 * ```
 * 
 * **Hooks Used:**
 * - `useCart`: Provides access to cart-related data, including the list of products and a method to check if the trolley is empty.
 * - `useCartDrawer`: Provides the state of the drawer and the ability to toggle its visibility.
 * 
 * **Context Requirement:**
 * - `CartProductDrawer` must be used within a `CartProvider` (or a component wrapped in it) to ensure the hooks have access to the necessary context. Failing to do so will result in errors since the hooks rely on the context provided by `TrolleyProvider`.
 * 
 * **Styling:**
 * - The drawer is styled using the rules defined in `index.less`. It includes a conditional class for hiding the drawer when it is not enabled.
 * 
 * **Props:**
 * - This component does not accept any props.
 * 
 * **Notes:**
 * - Ensure that `TrolleyProvider` is properly set up in the component tree to avoid issues with context being `undefined`.
 * - The `onClick` handler for the "Comprar" button is currently empty and should be implemented based on the purchasing logic.
 * 
 * @returns A `div` element styled as a drawer containing the list of products in the trolley and a button for purchasing them.
 */
export function CartProductDrawer(){
    const {productsInStorage,isCartEmpty}:useCartType = useCart();
    const {isDrawerEnabled}:useCartDrawerType = useCartDrawer();

    return (
        <div className ={`TrolleyDrawer ${!isDrawerEnabled && 'hidde__Drawer'}`} >

            <div className="TrolleyDrawer__products">
                {productsInStorage.map((product:Product)=>{
                    return <CartProductItem>{product}</CartProductItem>
                })}
            </div>

            {!isCartEmpty() && (
                <div className="TrolleyDrawer__actions">
                    <Button onClick={()=>{}}>Comprar</Button>
                </div>
            )}
            

        </div>
    )
}