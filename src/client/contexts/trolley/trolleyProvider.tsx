import { TrolleyContext } from "./trolleyContext.tsx";
import React from "react";
import {TrolleyHook,DrawerHook} from "./hooks/index.tsx";
import {TrolleyDrawer} from '../../components/trolley/trolleyDrawer/index.tsx'


/**
 * `TrolleyProvider` is a React component that provides a context for managing the shopping cart and drawer state to its child components.
 * 
 * This provider uses two internal hooks (`TrolleyHook` and `DrawerHook`) to handle the logic related to the shopping cart and drawer state, respectively. 
 * It combines the results from both hooks and provides them via the `TrolleyContext`, allowing child components to access this information and functionality using the `useTrolley` or `useDrawer` hooks.
 * 
 * **Props:**
 * - `children` (React.ReactNode): The child components wrapped by the provider. These components will have access to the context provided by `TrolleyContext`.
 * 
 * **Usage:**
 * To use `TrolleyProvider`, wrap your components that need access to the context in your component tree, typically at a higher level so that all child components needing the context can access it.
 * 
 * ```jsx
 * import React from 'react';
 * import { TrolleyProvider } from './contexts/trolley/TrolleyProvider';
 * import YourComponent from './components/YourComponent';
 * 
 * function App() {
 *   return (
 *     <TrolleyProvider>
 *       <TrolleyDrawer />
 *       <YourComponent />
 *     </TrolleyProvider>
 *   );
 * }
 * 
 * export default App;
 * ```
 * 
 * **Internally:**
 * - `TrolleyHook` provides functionality related to the shopping cart (e.g., adding or removing products, retrieving products in the cart, etc.).
 * - `DrawerHook` manages the state and actions related to the drawer (e.g., enabling or disabling the drawer).
 * 
 * **Return:**
 * This component does not return any value. Its purpose is to provide context through the `TrolleyContext.Provider`.
 * 
 * @component
 */
export const TrolleyProvider = ({children}:{children:any}) => {

    return (
        <TrolleyContext.Provider
            value={{
                ...TrolleyHook(),
                ...DrawerHook()
        }}
        >
        <TrolleyDrawer />
            {children}
        </TrolleyContext.Provider>
    );
};
