import { useState } from "react";




/**
 * Custom hook for managing the visibility of a drawer component in the shopping cart.
 * 
 * This hook provides functionality to enable and disable a drawer, which can be used to show or hide additional options or details in the shopping cart interface.
 * 
 * **Returns:**
 * An object containing:
 * - `isDrawerEnabled`: A boolean value indicating whether the drawer is currently enabled (visible). `true` means the drawer is visible, and `false` means it is hidden.
 * - `enableDrawer`: A function that sets the `isDrawerEnabled` state to `true`, making the drawer visible.
 * - `disableDrawer`: A function that sets the `isDrawerEnabled` state to `false`, hiding the drawer.
 * 
 * **Usage Example:**
 * ```tsx
 * import React from 'react';
 * import { DrawerHook } from './path/to/DrawerHook';
 * 
 * const MyComponent = () => {
 *   const { isDrawerEnabled, enableDrawer, disableDrawer } = DrawerHook();
 * 
 *   return (
 *     <div>
 *       <button onClick={enableDrawer}>Show Drawer</button>
 *       <button onClick={disableDrawer}>Hide Drawer</button>
 *       {isDrawerEnabled && (
 *         <div className="drawer">
 *           <p>This is the drawer content.</p>
 *         </div>
 *       )}
 *     </div>
 *   );
 * };
 * 
 * export default MyComponent;
 * ```
 * 
 * **Functions:**
 * - `enableDrawer()`
 *   - Sets the `isDrawerEnabled` state to `true`, making the drawer visible.
 * 
 * - `disableDrawer()`
 *   - Sets the `isDrawerEnabled` state to `false`, hiding the drawer.
 * 
 * **State:**
 * - `isDrawerEnabled: boolean`
 *   - Represents whether the drawer is currently visible or hidden. This state is managed internally by the hook and can be used to conditionally render the drawer in the component.
 * 
 * @returns {{
 *   isDrawerEnabled: boolean,
 *   enableDrawer: Function,
 *   disableDrawer: Function
 * }}
 */
export function DrawerHook(){
    const [isDrawerEnabled,setDrawer] = useState<boolean>(false);

    function enableDrawer(){
        setDrawer(true)
    }

    function disableDrawer(){
        setDrawer(false)
    }

    return {isDrawerEnabled,disableDrawer,enableDrawer}

}