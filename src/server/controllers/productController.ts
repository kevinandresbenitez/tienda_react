import { Request, Response } from 'express';
import { AppDataSource } from '../config/db/config.ts';
import { Product } from '../models/product.ts';
import { ProductVersion } from '../models/productVersion.ts';


const getProducts = async (req:any, res:any) => {
    try{
        const productRepository = AppDataSource.getRepository(Product);
        const products = await productRepository.find({relations:{versions:true}});

        if(!products){
            return res.status(404).json({ message: 'Products not found' });    
        }


        res.status(200).json(products);

    }catch(error){
        res.status(500).send("error db conection")
    }
};

const getProductsByID = async (req:any, res:any) => {
    try{
        const productId = parseInt(req.params.id);

        if(!productId && !/^\d+$/.test(req.params.id)){
            return res.status(404).json({ message: 'Product not found' });    
        }

        const productRepository = AppDataSource.getRepository(Product);
        const product = await productRepository.findOne({where:{id:productId},relations:{versions:true}});

        if(!product){
            return res.status(404).json({ message: 'Product not found' });    
        }

        res.status(200).json(product);

    }catch(error){
        res.status(500).send("error db conection")

    }
};


export default {getProducts,getProductsByID}