import React, { useEffect } from "react";
import './index.less';
import { useTrolley } from "../../../contexts/TrolleyContext/index.tsx"; 
import { Product } from "../../../models/product";
import { useTrolleyType } from "../../../types/useTrolleyType.tsx";
import { Link } from "react-router-dom";
import { Button } from "../../button/index.tsx";
import { TrolleyProduct } from "../trolleyProduct/index.tsx";

/**
 * 
 * @returns component that allows you to view the shopping cart
 */
export function TrolleyDrawer(){
    const {productsInStorage,isDrawerEnabled}:useTrolleyType = useTrolley();

    return (
        <div className ={`TrolleyDrawer ${!isDrawerEnabled && 'hidde__Drawer'}`} >

            <div className="TrolleyDrawer__products">
                {productsInStorage.map((product:Product)=>{
                    return <TrolleyProduct>{product}</TrolleyProduct>
                })}
            </div>

            <div className="TrolleyDrawer__actions">
                <Button onClick={()=>{}}>Ver mas Detalles</Button>
                <Button onClick={()=>{}}>Comprar</Button>
            </div>

        </div>
    )
}