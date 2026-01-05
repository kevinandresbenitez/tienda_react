import React, { useRef, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import { Product} from "../../../models/product/index.ts";
import './index.less';
import Carrusel from "../../common/carrusel/index.tsx";
import ColorPickerButtonGroup from "../../common/colorPickerButtonGroup/index.tsx";
import  Button  from "../../common/buttons/button/index.tsx";
import { useCart,useCartType } from "../../../contexts/cart/index.ts";
import { useNotificationType,useNotification } from "../../../contexts/notification/index.ts";



export default function ModalContent({children:product,versionContent}:{children:Product,versionContent: 'lite' | 'normal'}){

    const inputStock = useRef<HTMLInputElement>(null);

    // Info elements
    const [indexVersionSelected,setIndexVersionSelected] = useState<number | null>(null);
    const productCopy = Product.copy(product);


    // Hooks
    const {addProductToCart}:useCartType = useCart();
    const {addNotification}:useNotificationType = useNotification();

    // Filter version if the index color is selected
    if(indexVersionSelected != null ){
        productCopy.versions = [productCopy.versions[indexVersionSelected]];

        //Restore stock
        if(inputStock.current){
            inputStock.current.value = "1";
        }     
    }

    function handleBuyProduct(){
        
    }
    function handleAddProductToTrolley(){
        let productToAdd = Product.copy(productCopy);
        if(inputStock.current?.value){
            productToAdd.versions[0].stock =  parseInt(inputStock.current?.value);
        }
        addProductToCart(productToAdd)
        addNotification({content:'Se ha agregado el producto al carrito',duration:2000,variant:'success'})
    }


    return(
        <div className="product__content">
            <div className="product__content__imgs">
                <Carrusel imgs={productCopy.getImgs()} />
            </div>

            <div className="product__content__info">
                <div className="product__content__info__details">
                    <p className="product__content__info_name">{product.name}</p>
                    <p className="product__content__info_price">${product.price}</p>
                    <p className="product__content__info_sku">SKU: {product.id}</p>
                </div>

                <div className="product__content__actions">
                    <div className="product__content__actions__colors">
                        <strong>Color</strong>
                        <ColorPickerButtonGroup onColorSelect={setIndexVersionSelected} colors={product.getColors()} />
                    </div>

                    <div className="product__content__actions__stock">
                        <strong>Stock Disponible</strong>
                        <p>{productCopy.getStock()}</p>
                    </div>

                    <div className={'product__content__actions__fade ' + (indexVersionSelected == null ? 'hidde' : 'show')}>
                        <div className='product__content__actions__stock'>
                            <strong>Cantidad</strong>
                            <input type="number" defaultValue={1} ref={inputStock} min="1" max={productCopy.getStock()} />
                        </div>

                        {versionContent === 'normal' && <div>{product.description}</div>}

                        <div className="product__content__actions__buttons">
                            <Button onClick={handleAddProductToTrolley}>Agregar al carrito</Button>
                            <Button onClick={handleBuyProduct}  variant="secondary">Comprar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


    
}

ModalContent.propTypes = {
    children: PropTypes.instanceOf(Product).isRequired,
    versionContent: PropTypes.oneOf(['lite', 'normal']).isRequired,
};
