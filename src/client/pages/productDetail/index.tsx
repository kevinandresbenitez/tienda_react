import React from "react";
import {Product} from '../../models/product/index.tsx'
import { useParams } from 'react-router-dom';
import './index.less'
import { ProductContent} from "../../components/products/index.tsx";

export default function ProductDetail(){
    const { id } = useParams();
    let product:Product | null = null;

    try {
        if(id){

            if (!/^\d+$/.test(id)) {
                throw new Error("El id del producto enviado por la barra de direcciones no es un número entero válido.");
            }

            let number = parseInt(id,10);
            product = Product.getProductById(number);
        }
    } catch (error) {
        if (typeof window !== "undefined") {
            console.log(error);
        }
    }

    

    
    return(
        <article className="container__product">
            {product ? <ProductContent versionContent="normal">{product}</ProductContent>:"No se encontro el producto"}           
        </article>
)
}