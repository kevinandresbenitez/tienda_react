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
        <div className="cart_product">


            <div className="cart_product__info">
                <div className="cart_product__info__img">
                    <img src={product.versions[0].img} alt={product.name} className="cart_product__img"/>
                </div>

                <div className="cart_product__info__text">
                    <strong className="cart_product__title">{product.name}</strong>
                    <p className="cart_product__sku">Sku: {product.id}</p>
                    <p className="cart_product__version">{product.versions[0].nameColor}</p>
                    <p className="cart_product__count">Cantidad: {product.getStock()}</p>
                </div>

            </div>

            <div className="cart_product__actions">
                <Link to={`/product/${product.id}`} className="cart_product__button" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                <button className="cart_product__button" onClick={()=>{removeProductHandle(product)}}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}