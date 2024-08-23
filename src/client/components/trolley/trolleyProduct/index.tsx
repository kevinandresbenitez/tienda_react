import React from "react";
import './index.less';
import { useTrolleyInContext } from "../../../contexts/TrolleyContext/index.tsx"; 
import { Product } from "../../../models/product";
import { useTrolleyInContextType } from "../../../types/useTrolleyType.tsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
/**
 * @param product 
 * @returns component to view a product in a simplified way
 */
export function TrolleyProduct({children}:{children:Product}){
    const {removeProductOnTrolley}:useTrolleyInContextType = useTrolleyInContext();
    
    return (
        <div className="TrolleyProduct">
            <p>{children.name}</p>
            <p>{children.id}</p>
            <button className="TrolleyProduct__button__remove" onClick={()=>{removeProductOnTrolley(children)}}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}