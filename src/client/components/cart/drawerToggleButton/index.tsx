import React from "react";
import "./index.less"
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart,useCartType, useDrawer,useDrawerType } from "../../../contexts/cart/index.ts";



export function CartDrawerToggleButton(){
    const {productsInStorage}:useCartType = useCart();
    const {isDrawerEnabled,disableDrawer,enableDrawer}:useDrawerType = useDrawer();


    return(
        <button onClick={isDrawerEnabled ? disableDrawer:enableDrawer} className="TrolleyButton" >
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{productsInStorage.length}</p>
        </button>
    )
}