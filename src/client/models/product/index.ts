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

    static async getProducts():Promise<Product[]>{

        try {
            const response = await fetch(Product.API_URL);
            
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
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

        } catch (error) {
            console.log(error);
            return [];
        }        
    }

    static async getProductById(id:number):Promise<Product | null>{
        try {
            const response = await fetch( Product.API_URL + id);
            
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const item = await response.json();
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
            

        } catch (error) {
            console.log(error);
            return null;
        }    
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