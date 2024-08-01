import { useEffect, useState } from "react";
import { Product } from "../../models/product/index.tsx";




export default function TrolleyHook(){

    const [productsInStorage,setProductsOnStorage] = useState<Product[]>([]) 

    useEffect(()=>{
        setProductsOnStorage(getProductsFromLocalStorage())
    },[])


    function addProductToStorage(product:Product){
        addProductToLocalStorage(product);
        setProductsOnStorage([...productsInStorage,product]);
    }

    function removeProductToStorage(product:Product){
        removeProductOnLocalStorage(product);
        setProductsOnStorage(productsInStorage.filter((obj:Product)=> obj !== product));
    }
    /**
     * 
     * @returns obtains products from storage through an array of id
     */
    function getProductsFromLocalStorage():Product[]{
        let products = localStorage.getItem("products");

        if(products == null){
            return [];
        }
        return JSON.parse(products)
    }

    function addProductToLocalStorage(product:Product):void{
        let products = localStorage.getItem("products");

        if(products == null){
            localStorage.setItem("products",JSON.stringify([product]))
        }else{            
            let storage = getProductsFromLocalStorage();
            storage.push(product);
            localStorage.setItem("products",JSON.stringify(storage))
        }
    }

    function removeProductOnLocalStorage(product:Product):void{
        let products = localStorage.getItem("products");

        if(products !== null){
            let storage = getProductsFromLocalStorage();
            localStorage.setItem("products",JSON.stringify(storage.filter((obj:Product)=> obj !== product)))
        }

    }




    function cleanStorage():void{
        localStorage.removeItem('products');
    }


    return {productsInStorage,addProductToTrolley:addProductToStorage,removeProductOnTrolley:removeProductToStorage}



}