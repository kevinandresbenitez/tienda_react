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
    
    getColors():string[]{
        return this.versions.map((obj)=> obj.color);
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
        subproduct1.color = "#FF0000";
        subproduct1.nameColor = "Rojo";
        subproduct1.stock = 20;
        subproduct1.img = "https://static.wixstatic.com/media/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg"
        
        const subproduct2 = new SubProducts();
        subproduct2.id = 2;
        subproduct2.color = "#0000FF";
        subproduct2.nameColor = "Azul";
        subproduct2.stock = 4;
        subproduct2.img = "https://static.wixstatic.com/media/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg"
    
        const subproduct3 = new SubProducts();
        subproduct3.id = 3;
        subproduct3.color = "#00FF00";
        subproduct3.nameColor = "Verde";
        subproduct3.stock = 5;
        subproduct3.img = "https://static.wixstatic.com/media/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_9e18a8d563fc4774a0b917d7f5e07ff6~mv2.jpg"

        product1.versions = [subproduct1,subproduct2,subproduct3];
        return [
            product1,product1,product1,product1,product1,product1,product1,product1
        ]
    }


}

class SubProducts{
    id:number;
    nameColor:string;
    color:string;
    stock:number;
    img:string;
}