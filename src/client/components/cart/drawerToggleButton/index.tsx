import React from "react";
import "./index.less"
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart, useCartDrawer } from "../../../contexts/cart/index.tsx";
import {useCartType,useCartDrawerType} from "../../../types/cart/index.tsx";


/**
 * `DrawerToggleButton` is a button component that displays the number of products in the shopping cart (trolley) and controls the visibility of a drawer with trolley details.
 * 
 * The button toggles the drawer visibility on click. If the drawer is currently visible, clicking the button will close it; if the drawer is hidden, clicking the button will open it.
 * 
 * **Features:**
 * - Displays a shopping cart icon and the count of products currently in the trolley.
 * - Toggles the visibility of the drawer containing trolley details.
 * 
 * **Returns:**
 * A button element that integrates with the trolley and drawer contexts:
 * - Shows a shopping cart icon and the number of products in the trolley.
 * - Toggles the drawer's visibility based on its current state.
 * 
 * **Usage Example:**
 * ```tsx
 * import React from 'react';
 * import { TrolleyButton } from './path/to/TrolleyButton';
 * 
 * const App = () => {
 *   return (
  *     <CartProvider>
 *       <DrawerToggleButton />
 *       { Other components }
  *     </CartProvider>
 *   );
 * };
 * 
 * export default App;
 * ```
 * 
 * **Hooks Used:**
 * - `useCart`: Provides access to trolley-related data such as the list of products in storage.
 * - `useCartDrawer`: Manages the state of the drawer, including functions to show or hide it.
 * 
 * **Context Requirement:**
 * - `TrolleyButton` must be used within a `TrolleyProvider` (or a component wrapped in it) to ensure the hooks have access to the necessary context. Failing to do so will result in errors since the hooks rely on the context provided by `TrolleyProvider`.
 * 
 * **Styling:**
 * - The button is styled using the rules defined in `index.less`.
 * 
 * **Props:**
 * - This component does not accept any props.
 * 
 * **Notes:**
 * - Ensure that `TrolleyProvider` is properly set up in the component tree to avoid issues with context being `undefined`.
 * 
 * @returns A button element that displays the shopping cart icon and the count of products in the trolley, and toggles the drawer's visibility on click.
 */
export function CartDrawerToggleButton(){
    const {productsInStorage}:useCartType = useCart();
    const {isDrawerEnabled,disableDrawer,enableDrawer}:useCartDrawerType = useCartDrawer();


    return(
        <button onClick={isDrawerEnabled ? disableDrawer:enableDrawer} className="TrolleyButton" >
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{productsInStorage.length}</p>
        </button>
    )
}