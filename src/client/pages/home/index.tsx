import React, { useEffect, useState } from "react";
import { Product } from '../../models/product/index.ts';
import { Card } from '../../components/common/card/index.tsx';
import './index.less'
import CardContent from "../../components/products/cardContent/index.tsx";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
import { useInitialData } from "../../contexts/initialData/index.tsx";

export default function Home() {
    const { homeData } = useInitialData();
    const [products, setProducts] = useState<Product[]>(homeData);

    useEffect(() => {
        if (!products || products.length === 0) {
            getProducts();
        }
    }, [])

    async function getProducts() {
        const products = await Product.getProducts();
        setProducts(products);
    };


    return (
        
            <article className="articles">
                {products && products.length > 0 ?
                    products.map((product: any, key: any) => {
                        return <Card key={key}>
                            <CardContent >{product}</CardContent>
                        </Card>
                    }) :
                    Array(12).fill(0).map((obj: any, key: any) => {
                        return <Card key={key} >
                            <Skeleton height='400px' />
                        </Card>
                    })
                }


            </article>
        
    )
}