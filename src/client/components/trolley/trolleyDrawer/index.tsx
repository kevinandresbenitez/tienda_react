import React, { useEffect } from "react";
import './index.less';
import { useTrolleyInContext, TrolleyContextProvider } from "../../../contexts/TrolleyContext/index.tsx"; 
import { Product } from "../../../models/product";
import { useTrolleyInContextType } from "../../../types/useTrolleyType.tsx";
import { Button } from "../../button/index.tsx";
import { TrolleyProduct } from "../trolleyProduct/index.tsx";

/**
 * 
 * @returns component that allows you to view the shopping cart
 */
export function TrolleyDrawer(){
    const {productsInStorage,isDrawerEnabled,isTrolleyEmpty}:useTrolleyInContextType = useTrolleyInContext();

    return (
        <div className ={`TrolleyDrawer ${!isDrawerEnabled && 'hidde__Drawer'}`} >

            <div className="TrolleyDrawer__products">
                {productsInStorage.map((product:Product)=>{
                    return <TrolleyProduct>{product}</TrolleyProduct>
                })}
            </div>

            {!isTrolleyEmpty() && (
                <div className="TrolleyDrawer__actions">
                    <Button onClick={()=>{}}>Comprar</Button>
                </div>
            )}
            

        </div>
    )
}