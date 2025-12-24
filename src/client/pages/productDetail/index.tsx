import React, { useEffect, useState } from "react";
import { Product } from '../../models/product/index.ts'
import { useParams } from 'react-router-dom';
import './index.less'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ModalProductContent from "../../components/products/modalContent/index.tsx";
import { useInitialData } from "../../contexts/initialData/index.tsx";

export default function ProductDetail() {
    const { productData } = useInitialData();
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(productData);

    useEffect(() => {

        if (!product) {
            if (id && /^\d+$/.test(id)) {
                let number = parseInt(id, 10);
                getProductById(number);
            } else {
                if (typeof window !== 'undefined') {
                    console.error("Product id is not a valid number");
                }
            }
        }

    }, [])

    async function getProductById(id: number) {
        const product = await Product.getProductById(id);
        setProduct(product);
    }

    return (
        <article className="container__product">
            {product ? <ModalProductContent versionContent="normal">{product}</ModalProductContent> : <Skeleton height="85vh" width="80vw" />}
        </article>
    )
}