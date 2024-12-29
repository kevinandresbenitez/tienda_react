import React, { useEffect } from "react";
import './index.less';
import { Product } from "../../../models/product/index.tsx";
import { useCart,useCartDrawer } from "../../../contexts/cart/index.tsx";
import { useCartDrawerType,useCartType} from "../../../types/cart/index.tsx";

import Button from "../../common/buttons/button/index.tsx";
import { CartProductItem } from "./productsItem/index.tsx";
import { EmptyCart } from "./emptyCart/index.tsx";
import  CloseButton from '../../common/buttons/buttonClose/index.tsx'


export function CartProductDrawer(){
    const {productsInStorage,isCartEmpty}:useCartType = useCart();
    const {isDrawerEnabled,disableDrawer}:useCartDrawerType = useCartDrawer();

    return (
        <div className ={`cartDrawer ${!isDrawerEnabled && 'hidde__Drawer'}`} >
            <CloseButton onClick={disableDrawer} />
            {!isCartEmpty() ? (
                <>


                <div className="cart__info"> 
                    <strong className="cart__info__title">Productos en el Carrito</strong>
                    <p className="cart__info__text">Aquí puedes ver y gestionar los productos en tu carrito.</p>
                </div>

                <div className="cartDrawer__products">
                    {productsInStorage.map((product:Product)=>{
                        return <CartProductItem>{product}</CartProductItem>
                    })}
                </div>

                <div className="cartDrawer__actions">
                    <Button onClick={()=>{}}>Comprar</Button>
                </div>
                </>
            ):<EmptyCart/>}
            

        </div>
    )
}