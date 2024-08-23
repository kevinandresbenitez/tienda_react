import RGBColor from "../../types/color.tsx";

export class Product{
    id:number
    name:string;
    description:string;
    info:string;
    price:number;
    imgTexture:string;
    versions:SubProducts[];

    getStock():number{
        return this.versions.reduce((a,b)=>(a + b.stock),0)
    }
    
    /**
     * 
     * @returns {RGBColor[]} Array of RGBColor
     */
    getColors():RGBColor[]{
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

    static getProducts():Product[]{
        const product1 = new Product()
        product1.id = 1;
        product1.name = "Bolsillon";
        product1.description = "Esta es una descripcion";
        product1.imgTexture = "https://static.wixstatic.com/media/45d10e_35c84fb1d48540f1886b2ceb7a342c37~mv2_d_3500_1968_s_2.jpg/v1/fill/w_310,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_35c84fb1d48540f1886b2ceb7a342c37~mv2_d_3500_1968_s_2.jpg"
        product1.info = "esta es informacion";
        product1.price = 30;
        
        const subproduct1 = new SubProducts();
        subproduct1.id = 1;
        subproduct1.color = new RGBColor(255,0,0);
        subproduct1.nameColor = "Rojo";
        subproduct1.stock = 20;
        subproduct1.img = "https://static.wixstatic.com/media/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg"
        
        const subproduct2 = new SubProducts();
        subproduct2.id = 2;
        subproduct2.color = new RGBColor(0,0,255);
        subproduct2.nameColor = "Azul";
        subproduct2.stock = 4;
        subproduct2.img = "https://static.wixstatic.com/media/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg"
    
        const subproduct3 = new SubProducts();
        subproduct3.id = 3;
        subproduct3.color = new RGBColor(0,255,0);
        subproduct3.nameColor = "Verde";
        subproduct3.stock = 5;
        subproduct3.img = "https://static.wixstatic.com/media/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg"

        product1.versions = [subproduct1,subproduct2,subproduct3];
        return [
            product1,product1,product1,product1,product1,product1,product1,product1
        ]
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
            copy.versions.push(SubProducts.copy(subProduct));
        })
        return copy;
    }
}

class SubProducts{
    id:number;
    nameColor:string;
    color:RGBColor;
    stock:number;
    img:string;

    static copy(subProduct:SubProducts):SubProducts{
        const copy = new SubProducts();
        copy.id = subProduct.id;
        copy.nameColor = subProduct.nameColor;
        copy.color = subProduct.color;
        copy.stock = subProduct.stock;
        copy.img = subProduct.img;

        return copy

    }
}