import React from "react";
import { CartContext } from "../context.tsx";
import { useEffect, useState } from "react";
import { Product } from "../../../models/product/index.ts";




export const hookCart = () => { 

    const [productsInStorage,setProductsOnStorage] = useState<Product[]>([]) 

    useEffect(()=>{
        setProductsOnStorage(getProductsFromLocalStorage())
    },[])

    /**
     * add a product in local storage and update the array from products "productsInStorage"
     * @param product 
     */
    function addProductToStorage(product:Product):void{
        addProductToLocalStorage(product);
        setProductsOnStorage([...productsInStorage,product]);
    }

    /**
     * return boolean
     */
    function isCartEmpty():boolean{
        return (productsInStorage.length == 0 )
    }

    /**
     * remove a product in local storage and update the array from products "productsInStorage"
     * @param product 
     */
    function removeProductToStorage(product:Product):void{
        removeProductOnLocalStorage(product);
        setProductsOnStorage(productsInStorage.filter((obj:Product)=> obj != product));
    }

    /**
     * @param Product[] from local storage
     */
    function getProductsFromLocalStorage():Product[]{
        let products = localStorage.getItem("products");

        if(products == null){
            return [];
        }
        // Parce to Products
        let productsFromStorage = JSON.parse(products).map((product:Product)=>{return Product.copy(product)})

        return productsFromStorage
    }

    /**
     * 
     * @param products[] are added in local storage 
     */
    function setProductsOnLocalStorage(products:Product[]):void{
        localStorage.setItem("products",JSON.stringify(products));
    }

    /**
     * 
     * @param product is added in local storage 
     */
    function addProductToLocalStorage(product:Product):void{
        let products = localStorage.getItem("products");

        if(products == null){
            setProductsOnLocalStorage([])
        }else{            
            let storage = getProductsFromLocalStorage();
            storage.push(product);
            setProductsOnLocalStorage(storage);
        }
    }


    /**
     * 
     * @param product is remove from local storage 
     */
    function removeProductOnLocalStorage(product:Product):void{
        setProductsOnLocalStorage(productsInStorage.filter((obj:Product)=> obj != product))
    }

    /**
     * clean the local storage
     * 
     */
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
