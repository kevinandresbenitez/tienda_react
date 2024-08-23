import React, { useState } from "react";
import TrolleyHook from "../../hooks/trolley/index.tsx"
import { useTrolleyInContextType } from "../../types/useTrolleyType.tsx";
import { DrawerHook } from "../../hooks/drawer/index.tsx";

const TrolleyContext = React.createContext<any>(1);


/**
 * 
 * @param react components that will be wrapped by a trolley context 
 * @returns 
 */
export const TrolleyContextProvider = ({children}:{children:any}) => {

    const { productsInStorage,addProductToTrolley,removeProductOnTrolley,isTrolleyEmpty} = TrolleyHook();
    const {isDrawerEnabled,enableDrawer,disableDrawer} = DrawerHook();

    return (
        <TrolleyContext.Provider
            value={{
                productsInStorage,
                isTrolleyEmpty,
                addProductToTrolley,
                removeProductOnTrolley,
                isDrawerEnabled,
                enableDrawer,
                disableDrawer
        }}
        >
            {children}
        </TrolleyContext.Provider>
    );
};

/**
 * Component that shares information within a trolley context
 */
export const useTrolleyInContext = ():useTrolleyInContextType => React.useContext(TrolleyContext);