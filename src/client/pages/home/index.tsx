import React from "react";
import {Product} from '../../models/product/index.tsx';
import {Card} from '../../components/product/index.tsx';
import './index.less'
export default function Home(){



    return(
        <article className="articles">
            {Product.getProducts().map((product,key)=>{
            return <Card key={key}>{product}</Card>})}
        </article>
)
}