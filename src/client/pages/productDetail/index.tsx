import React, { useEffect, useState } from "react";
import {Product} from '../../models/product/index.ts'
import { useParams } from 'react-router-dom';
import './index.less'
import { ProductContent} from "../../components/products/index.tsx";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductDetail(){
    const { id } = useParams();
    const [product,setProduct] = useState<Product | null>(null);

    useEffect(()=>{        
        try {
            if(id){
                if (!/^\d+$/.test(id)) {
                    throw new Error("El id del producto enviado por la barra de direcciones no es un número entero válido.");
                }
                let number = parseInt(id,10);
                getProductById(number)
            }
        } catch (error) {
            if (typeof window !== "undefined") {
                console.log(error);
            }
        }

    },[])

    async function getProductById(id:number){
        const product = await Product.getProductById(id);
        setProduct(product);
    }

    

    
    return(
        <article className="container__product">
            {product ? <ProductContent versionContent="normal">{product}</ProductContent>:<Skeleton height="80vh" width="80vw" />}
        </article>
)
}