import React, { useEffect } from "react";
import './index.less';
import { Product } from "../../../models/product";
import { useDrawer,useTrolley } from "../../../contexts/trolley/index.tsx";
import { useDrawerType,useTrolleyType} from "../../../types/trolley/index.tsx";

import Button from "../../button/index.tsx";
import { TrolleyProduct } from "../trolleyProduct/index.tsx";


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
 * import { TrolleyProvider } from './path/to/TrolleyProvider';
 * import { TrolleyDrawer } from './path/to/TrolleyDrawer';
 * 
 * const App = () => {
 *   return (
 *     <TrolleyProvider>
 *       <TrolleyDrawer />
 *       { Other components }
 *     </TrolleyProvider>
 *   );
 * };
 * 
 * export default App;
 * ```
 * 
 * **Hooks Used:**
 * - `useTrolley`: Provides access to trolley-related data, including the list of products and a method to check if the trolley is empty.
 * - `useDrawer`: Provides the state of the drawer and the ability to toggle its visibility.
 * 
 * **Context Requirement:**
 * - `TrolleyDrawer` must be used within a `TrolleyProvider` (or a component wrapped in it) to ensure the hooks have access to the necessary context. Failing to do so will result in errors since the hooks rely on the context provided by `TrolleyProvider`.
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
export function TrolleyDrawer(){
    const {productsInStorage,isTrolleyEmpty}:useTrolleyType = useTrolley();
    const {isDrawerEnabled,}:useDrawerType = useDrawer();

    return (
        <div className ={`TrolleyDrawer ${!isDrawerEnabled && 'hidde__Drawer'}`} >

            <div className="TrolleyDrawer__products">
                {productsInStorage.map((product:Product)=>{
                    return <TrolleyProduct>{product}</TrolleyProduct>
                })}
            </div>

            {!isTrolleyEmpty() && (
                <div className="TrolleyDrawer__actions">
                    <Button onClick={()=>{}}>Comprar</Button>
                </div>
            )}
            

        </div>
    )
}