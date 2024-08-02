import React from "react";
import TrolleyHook from "../../hooks/trolley/index.tsx"
import { useTrolleyType } from "../../types/useTrolleyType.tsx";

const TrolleyContext = React.createContext<any>(1);


/**
 * 
 * @param react components that will be wrapped by a trolley context 
 * @returns 
 */
export const TrolleyContextProvider = ({children}:{children:any}) => {

    const { productsInStorage,addProductToTrolley,removeProductOnTrolley} = TrolleyHook();

    return (
        <TrolleyContext.Provider
            value={{
                productsInStorage,
                addProductToTrolley,
                removeProductOnTrolley
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