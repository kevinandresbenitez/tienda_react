
import { TrolleyContextType } from "../../types/trolley/trolleyContext.tsx";
import React from "react";
import { TrolleyContext } from "./trolleyContext.tsx";
import { useDrawerType } from "../../types/trolley/useDrawerType.tsx";


/**
 * `useDrawer` is a custom React hook that provides access to drawer-related state and actions from the `TrolleyContext`.
 * 
 * This hook allows components to access and manipulate the state of the drawer, such as checking if the drawer is enabled and enabling or disabling the drawer. 
 * It leverages the `TrolleyContext` to retrieve the necessary context values and functions. 
 * The hook must be used within a `TrolleyProvider` to function correctly.
 * 
 * **Returns:**
 * - An object with the following properties:
 *   - `isDrawerEnabled` (boolean): A boolean indicating whether the drawer is currently enabled.
 *   - `enableDrawer` (function): A function to enable the drawer.
 *   - `disableDrawer` (function): A function to disable the drawer.
 * 
 * **Usage:**
 * To use `useDrawer`, ensure that your component is wrapped in a `TrolleyProvider`, so that the context is properly provided. Then, call `useDrawer` within your functional component to access the drawer state and actions.
 * 
 * ```jsx
 * import React from 'react';
 * import { useDrawer } from './contexts/trolley/useDrawer';
 * 
 * const MyComponent = () => {
 *   const { isDrawerEnabled, enableDrawer, disableDrawer } = useDrawer();
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
export const useDrawer = ():useDrawerType => {
    const context = React.useContext(TrolleyContext);
    if (context === undefined) {
        throw new Error("useDrawer must be used within a TrolleyProvider");
    }
    return {
        isDrawerEnabled: context.isDrawerEnabled,
        enableDrawer: context.enableDrawer,
        disableDrawer: context.disableDrawer
    };
};