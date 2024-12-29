import React from "react";
import "./index.less"
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart, useCartDrawer } from "../../../contexts/cart/index.tsx";
import {useCartType,useCartDrawerType} from "../../../types/cart/index.tsx";


export function CartDrawerToggleButton(){
    const {productsInStorage}:useCartType = useCart();
    const {isDrawerEnabled,disableDrawer,enableDrawer}:useCartDrawerType = useCartDrawer();


    return(
        <button onClick={isDrawerEnabled ? disableDrawer:enableDrawer} className="TrolleyButton" >
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{productsInStorage.length}</p>
        </button>
    )
}