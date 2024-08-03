import React, { useState } from "react";
import TrolleyHook from "../../hooks/trolley/index.tsx"
import { useTrolleyType } from "../../types/useTrolleyType.tsx";
import { DrawerHook } from "../../hooks/drawer/index.tsx";

const TrolleyContext = React.createContext<any>(1);


/**
 * 
 * @param react components that will be wrapped by a trolley context 
 * @returns 
 */
export const TrolleyContextProvider = ({children}:{children:any}) => {

    const { productsInStorage,addProductToTrolley,removeProductOnTrolley} = TrolleyHook();
    const {isDrawerEnabled,enableDrawer,disableDrawer} = DrawerHook();

    return (
        <TrolleyContext.Provider
            value={{
                productsInStorage,
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
export const useTrolley = ():useTrolleyType => React.useContext(TrolleyContext);