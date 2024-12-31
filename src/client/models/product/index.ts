import axios from "axios";

export class Product{
    id:number
    name:string;
    description:string;
    info:string;
    price:number;
    imgTexture:string;
    versions:ProductVersion[];
    static API_URL = 'http://localhost:8080/api/products/';

    getStock():number{
        return this.versions.reduce((a,b)=>(a + b.stock),0)
    }
    
    /**
     * 
     * @returns {string[]} Array of hexadecilal color from the versions
     */
    getColors():string[]{
        return this.versions.map((obj)=> obj.color);
    }

    /**
     * You get an array of images that includes an image of the first version of the product, 
     * followed by the texture, 
     * followed by more images of the different versions.
     * @returns {string[]} Array of strings representing image paths.
     */
    getImgs():string[]{
        const productsImgs = this.versions.map((obj)=>obj.img);
        productsImgs.splice(1,0,this.imgTexture);
        return productsImgs;
    }

    /**
     * Fetches a list of all products from the API and maps the data into Product objects.
     * 
     * This method sends a GET request to the API URL specified in `Product.API_URL` and retrieves all available products. 
     * It maps each product from the response data into a `Product` object, including its related `versions`.
     * 
     * @returns {Promise<Product[]>} A promise that resolves to an array of `Product` objects.
     * @throws {Error} Throws an error if the request fails or if no products are found.
     */
    static async getProducts():Promise<Product[]>{    
        const response = await axios.get(Product.API_URL);
        const data = response.data;

        return data.map((item:any)=>{
            const product = new Product();
            product.id = item.id;
            product.name = item.name;
            product.description = item.description;
            product.info = item.info;
            product.price = item.price;
            product.imgTexture = item.img_texture;

            product.versions = item.versions.map((version: any) => {
                const productVersion = new ProductVersion();
                productVersion.id = version.id;
                productVersion.nameColor = version.color_name;
                productVersion.color = version.color_rgb;
                productVersion.stock = version.stock;
                productVersion.img = version.img;
                return productVersion;
            });

            return product;
        })

          
    }

    /**
     * Fetches a single product by its ID from the API and maps the data into a Product object.
     * 
     * This method sends a GET request to the API URL specified in `Product.API_URL` with the provided `id` as a parameter.
     * It retrieves the product with the given `id`, and maps the product and its versions from the response data into `Product` and `ProductVersion` objects.
     * 
     * @param {number} id - The ID of the product to retrieve.
     * @returns {Promise<Product>} A promise that resolves to a single `Product` object.
     * @throws {Error} Throws an error if the request fails or if no product is found for the provided ID.
     */
    static async getProductById(id:number):Promise<Product>{
        const response = await axios.get( Product.API_URL + id);
        const item = response.data;
        const product = new Product();
        product.id = item.id;
        product.name = item.name;
        product.description = item.description;
        product.info = item.info;
        product.price = item.price;
        product.imgTexture = item.img_texture;

        product.versions = item.versions.map((version: any) => {
            const productVersion = new ProductVersion();
            productVersion.id = version.id;
            productVersion.nameColor = version.color_name;
            productVersion.color = version.color_rgb;
            productVersion.stock = version.stock;
            productVersion.img = version.img;
            return productVersion;
        });

        return product;
            
    }

    /**
     * 
     * @param product 
     * @returns a copy of the product
     */
    static copy(product:Product):Product{
        const copy = new Product();
        copy.id = product.id;
        copy.name = product.name;
        copy.description = product.description;
        copy.info = product.info;
        copy.price = product.price;
        copy.imgTexture = product.imgTexture;
        copy.versions = [];
        product.versions.forEach((subProduct)=>{
            copy.versions.push(ProductVersion.copy(subProduct));
        })
        return copy;
    }
}

class ProductVersion{
    id:number;
    nameColor:string;
    color:string;
    stock:number;
    img:string;

    static copy(subProduct:ProductVersion):ProductVersion{
        const copy = new ProductVersion();
        copy.id = subProduct.id;
        copy.nameColor = subProduct.nameColor;
        copy.color = subProduct.color;
        copy.stock = subProduct.stock;
        copy.img = subProduct.img;

        return copy

    }
}