import React from "react";
import "./index.less"
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTrolley } from "../../../contexts/TrolleyContext/index.tsx";
import { useTrolleyType } from "../../../types/useTrolleyType.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


/**
 * this componen can open a window with the products in the trolley
 * @returns A component with acces to the trolley
 */
export function TrolleyButton(){
    const {productsInStorage,isDrawerEnabled,enableDrawer,disableDrawer}:useTrolleyType = useTrolley();


    return(
        <button onClick={isDrawerEnabled ? disableDrawer:enableDrawer} className="TrolleyButton" >
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{productsInStorage.length}</p>
        </button>
    )
}