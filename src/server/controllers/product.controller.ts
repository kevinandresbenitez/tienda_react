import { Request, Response } from 'express';
import { AppDataSource } from '../config/db/config.ts';
import { Product } from '../models/product.ts';
import { ProductVersion } from '../models/productVersion.ts';
import { ApiResponse, ProductDto } from '../../shared/api-types.ts';


/**
 * GET /api/products
 *
 * Retrieves the list of all products, including their versions.
 *
 * Successful response:
 * 200 - Products retrieved successfully
 * {
 *   message: "Products retrieved successfully",
 *   payload: [
 *     {
 *       id: number,
 *       name: string,
 *       description: string,
 *       price: number,
 *       img_texture: string | null,
 *       info: string | null,
 *       versions: [
 *         {
 *           id: number,
 *           color_name: string,
 *           color_rgb: string,
 *           stock: number,
 *           img: string | null
 *         }
 *       ]
 *     }
 *   ]
 * }
 *
 * Errors:
 * 404 - Products not found
 * { message: "Products not found" }
 *
 * 500 - Internal server error
 * { message: "error db connection" }
 */
const getProducts = async (req:any, res:any) => {
    try{
        const productRepository = AppDataSource.getRepository(Product);
        const products = await productRepository.find({relations:{versions:true}});

        if(!products){
            return res.status(404).json({ message: 'Products not found' } satisfies ApiResponse);    
        }

        // Generate payload
        const payload: ProductDto[] = products.map(product => ({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            img_texture: product.img_texture,
            info: product.info,
            versions: product.versions.map(v => ({
              id: v.id,
              color_name: v.color_name,
              color_rgb: v.color_rgb,
              stock: v.stock,
              img: v.img,
            }))
          }));

        const response:ApiResponse<ProductDto[]> = {
            message: 'Products retrieved successfully',
            payload
        };
    
        res.status(200).json(response) satisfies ApiResponse<ProductDto[]>;

    }catch(error){
        res.status(500).json({ message: "error db conection" } satisfies ApiResponse);
    }
};

/**
 * GET /api/products/:id
 *
 * Retrieves a single product by its ID, including its versions.
 *
 * Path Parameters:
 * - id: number (ID of the product to retrieve)
 *
 * Successful response:
 * 200 - Product retrieved successfully
 * {
 *   message: "Product retrieved successfully",
 *   payload: {
 *     id: number,
 *     name: string,
 *     description: string,
 *     price: number,
 *     img_texture: string | null,
 *     info: string | null,
 *     versions: [
 *       {
 *         id: number,
 *         color_name: string,
 *         color_rgb: string,
 *         stock: number,
 *         img: string | null
 *       }
 *     ]
 *   }
 * }
 *
 * Errors:
 * 404 - Invalid ID or product not found
 * { message: "Product id is not valid" }
 * { message: "Product not found" }
 *
 * 500 - Internal server error
 * { message: "error db connection" }
 */
const getProductsByID = async (req:any, res:any) => {
    try{
        const id = req.params.id;
        if(!id || !/^\d+$/.test(id)){
            return res.status(404).json({ message: 'Product id is not valid' } satisfies ApiResponse);    
        }
        const productId = parseInt(id);
        const productRepository = AppDataSource.getRepository(Product);
        const product = await productRepository.findOne({where:{id:productId},relations:{versions:true}});

        if(!product){
            return res.status(404).json({ message: 'Product not found' } satisfies ApiResponse);    
        }

        const payload: ProductDto = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            img_texture: product.img_texture,
            info: product.info,
            versions: product.versions.map(v => ({
                id: v.id,
                color_name: v.color_name,
                color_rgb: v.color_rgb,
                stock: v.stock,
                img: v.img,
            }))
        };

        const response:ApiResponse<ProductDto> = {
            message: 'Product retrieved successfully',
            payload
        };

        res.status(200).json(response) satisfies ApiResponse<ProductDto>;

    }catch(error){
        res.status(500).json({ message: "error db conection" } satisfies ApiResponse);
    }
};


export default {getProducts,getProductsByID}