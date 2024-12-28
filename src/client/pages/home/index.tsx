import React, { useEffect, useState } from "react";
import {Product} from '../../models/product/index.ts';
import {Card} from '../../components/products/index.tsx';
import './index.less'
export default function Home(){
    const [products,setProducts] = useState<Product[]>([]);
    
    useEffect(()=>{
        getProducts();
    },[])

    async function getProducts(){        
        const products = await Product.getProducts(); 
        setProducts(products);        
    };


    return(
        <>
        <article className="articles">
            {products.map((product:any,key:any)=>{
            return <Card key={key}>{product}</Card>})}
        </article>
        </>
)
}