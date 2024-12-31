import React from "react";
import './index.less';
import { useCart ,useCartType} from "../../../../contexts/cart/index.ts";
import { Product } from "../../../../models/product/index.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import {useNotification,useNotificationType} from "../../../../contexts/notification/index.ts"
import { Link } from "react-router-dom";


export function CartProductItem({children:product}:{children:Product}){
    const {removeProductOnCart}:useCartType = useCart();
    const {addNotification}:useNotificationType = useNotification();
    

    function removeProductHandle(product:Product){
        removeProductOnCart(product)
        addNotification({content:"Se ha eliminado el producto del carrito",duration:2000,variant:'trash'})
    }

    return (
        <div className="cartProduct">
            <strong className="cartProduct__title">{product.name}</strong>
            <p className="cartProduct__sku">Sku: {product.id}</p>
            <p className="cartProduct__version">Color de version: {product.versions[0].nameColor}</p>
            <p className="cartProduct__count">Cantidad: {product.getStock()}</p>
            <Link to={`/product/${product.id}`} className="cartProduct__button__link" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
            <button className="cartProduct__button__remove" onClick={()=>{removeProductHandle(product)}}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}