import React, { useRef, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import { Product} from "../../../models/product/index.ts";
import './index.less';
import Carrusel from "../../common/carrusel/index.tsx";
import {Modal as ModalCommon} from "../../common/modal/index.tsx";
import ColorPickerButtonGroup from "../../common/colorPickerButtonGroup/index.tsx";
import  Button  from "../../common/button/index.tsx";
import { useCart} from "../../../contexts/cart/useCart.tsx";
import { useCartType } from "../../../types/cart/useCartType.tsx";
import { useNotificationType } from "../../../types/notification/useNotificationType.tsx";
import {useNotification} from "../../../contexts/notification/index.tsx"



/**
 * ProductContent Component
 * 
 * This component is responsible for displaying product information, 
 * including an image carousel, product details (name, price, SKU), 
 * and options to select color and quantity.
 * 
 * Props:
 * - children (Product): The product object to be displayed. Must be an 
 *   instance of the `Product` class.
 * - versionContent (string): Indicates the version of the content, 
 *   which can be 'lite' or 'normal'.
 * 
 * Functions:
 * - handleAddProductToTrolley: Adds the selected product to the shopping 
 *   cart.
 * - handleBuyProduct: (Function not yet implemented) Logic for 
 *   purchasing the product directly.
 * 
 * This component relies on the cart and notification context to handle 
 * the actions of adding products and displaying success messages.
 * 
 * 
 * 
 * 
 * **Usage Example:**
 * ```tsx
 * import React from 'react';
 * import { CartProvider } from './path/to/CartProvider';
 * import { CartProductDrawer } from './path/to/CartProductDrawer';
 * 
 * const App = () => {
 *   return (
 *      <NotificationProvider>
 *          <CartProvider>
 *              <ProductContent product={yourProduct} versionContent="normal" />
 *          </CartProvider>
 *      </NotificationProvider>
 *   );
 * };
 * export default App;
 * ```
 * 
 */
export default function ProductContent({children:product,versionContent}:{children:Product,versionContent: 'lite' | 'normal'}){

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

                        <div className="product__content__actions__buttons">
                            <Button onClick={handleAddProductToTrolley}>Agregar al carrito</Button>
                            <Button style="filled" onClick={handleBuyProduct}>Comprar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


    
}

ProductContent.propTypes = {
    children: PropTypes.instanceOf(Product).isRequired,
    versionContent: PropTypes.oneOf(['lite', 'normal']).isRequired,
};
