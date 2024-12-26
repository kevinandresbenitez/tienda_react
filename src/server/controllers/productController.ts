import { Request, Response } from 'express';
import { AppDataSource } from '../config/db/config.ts';
import { Product } from '../models/product.ts';
import { ProductVersion } from '../models/productVersion.ts';


const getProducts = async (req:any, res:any) => {
    try{
        const productRepository = AppDataSource.getRepository(Product);
        const products = await productRepository.find({relations:{versions:true}});
        res.json(products);

    }catch(error){
        res.send("error db conection")

    }
};


export default {getProducts}