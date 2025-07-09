import React from "react";
import { CartContext } from "../context.tsx";
import { useEffect, useState } from "react";
import { Product } from "../../../models/product/index.ts";




export const hookCart = () => { 

    const [productsInStorage,setProductsOnStorage] = useState<Product[]>([]) 

    useEffect(()=>{
        setProductsOnStorage(getProductsFromLocalStorage())
    },[])

    useEffect(()=>{
        setProductsOnLocalStorage(productsInStorage);
    },[productsInStorage])


    function addProductToStorage(product:Product):void{
        setProductsOnStorage([...productsInStorage,product]);
    }


    function removeProductToStorage(product:Product):void{
        setProductsOnStorage(productsInStorage.filter((obj:Product)=> obj != product));
    }


    function isCartEmpty():boolean{
        return (productsInStorage.length == 0 )
    }

    
    function getProductsFromLocalStorage():Product[]{
        let products = localStorage.getItem("products");

        if(products == null){
            return [];
        }
        // Parce to Products
        let productsFromStorage = JSON.parse(products).map((product:Product)=>{return Product.copy(product)})

        return productsFromStorage
    }


    function setProductsOnLocalStorage(products:Product[]):void{
        localStorage.setItem("products",JSON.stringify(products));
    }


    function cleanStorage():void{
        localStorage.removeItem('products');
    }





    return {
        productsInStorage:productsInStorage,
        addProductToCart: addProductToStorage,
        removeProductOnCart: removeProductToStorage,
        isCartEmpty: isCartEmpty
    };
    
}
