import React from "react";
import TrolleyHook from "../../hooks/trolley/index.tsx"
import { useTrolleyType } from "../../types/useTrolleyType.tsx";

const TrolleyContext = React.createContext<any>(1);


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


export const useTrolley = ():useTrolleyType => React.useContext(TrolleyContext);