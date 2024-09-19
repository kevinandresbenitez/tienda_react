
import React from "react";
import { CartContext } from "./cartContext.tsx";
import { useCartDrawerType } from "../../types/cart/useCartDrawerType.tsx";


/**
 * `useCartDrawer` is a custom React hook that provides access to drawer-related state and actions from the `CartContext`.
 * 
 * This hook allows components to access and manipulate the state of the drawer, such as checking if the drawer is enabled and enabling or disabling the drawer. 
 * It leverages the `CartContext` to retrieve the necessary context values and functions. 
 * The hook must be used within a `TrolleyProvider` to function correctly.
 * 
 * **Returns:**
 * - An object with the following properties:
 *   - `isDrawerEnabled` (boolean): A boolean indicating whether the drawer is currently enabled.
 *   - `enableDrawer` (function): A function to enable the drawer.
 *   - `disableDrawer` (function): A function to disable the drawer.
 * 
 * **Usage:**
 * To use `useDrawer`, ensure that your component is wrapped in a `CartProvider`, so that the context is properly provided. Then, call `useDrawer` within your functional component to access the drawer state and actions.
 * 
 * ```jsx
 * import React from 'react';
 * import { useCartDrawer } from './contexts/cart/useDrawer';
 * 
 * const MyComponent = () => {
 *   const { isDrawerEnabled, enableDrawer, disableDrawer } = useCartDrawer();
 * 
 *   return (
 *     <div>
 *       <p>Drawer is {isDrawerEnabled ? 'enabled' : 'disabled'}</p>
 *       <button onClick={enableDrawer}>Enable Drawer</button>
 *       <button onClick={disableDrawer}>Disable Drawer</button>
 *     </div>
 *   );
 * };
 * 
 * export default MyComponent;
 * ```
 * 
 * **Error Handling:**
 * - Throws an error if `useDrawer` is used outside of a `TrolleyProvider`. Ensure that your component is within the context provider to avoid this issue.
 * 
 * @throws {Error} Throws an error if `useDrawer` is used outside of a `TrolleyProvider`.
 * 
 * @hook
 */
export const useCartDrawer = ():useCartDrawerType => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error("useDrawer must be used within a TrolleyProvider");
    }
    return {
        isDrawerEnabled: context.isDrawerEnabled,
        enableDrawer: context.enableDrawer,
        disableDrawer: context.disableDrawer
    };
};