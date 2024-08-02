import React from "react";
import './index.less';
import { useTrolley } from "../../../contexts/TrolleyContext/index.tsx"; 
import { Product } from "../../../models/product";
import { useTrolleyType } from "../../../types/useTrolleyType.tsx";
import { Link } from "react-router-dom";

/**
 * @param product 
 * @returns component to view a product in a simplified way
 */
export function TrolleyProduct({children}:{children:Product}){
    const {removeProductOnTrolley}:useTrolleyType = useTrolley();
    
    return (
        <div className="TrolleyProduct">
            {children.name}
            <button onClick={()=>{removeProductOnTrolley(children)}}></button>
        </div>
    )
}