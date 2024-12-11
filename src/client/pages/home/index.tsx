import React from "react";
import {Product} from '../../models/product/index.ts';
import {Card} from '../../components/products/index.tsx';
import './index.less'
import { SearchBar } from "../../components/common/searchBar/index.tsx";
export default function Home(){

    function onSearch(query:string){}

    return(
        <>
        <SearchBar  onSearch={onSearch} />
        <article className="articles">
            {Product.getProducts().map((product,key)=>{
            return <Card key={key}>{product}</Card>})}
        </article>
        </>
)
}