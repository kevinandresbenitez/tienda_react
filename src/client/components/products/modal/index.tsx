import React, { useRef, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import { Product} from "../../../models/product/index.tsx";
import './index.less';
import Carrusel from "../../common/carrusel/index.tsx";
import ColorPickerButtonGroup from "../../common/colorPickerButtonGroup/index.tsx";
import  Button  from "../../common/button/index.tsx";
import { useCart} from "../../../contexts/cart/useCart.tsx";
import { useCartType } from "../../../types/cart/useCartType.tsx";
import { useNotificationType } from "../../../types/notification/useNotificationType.tsx";
import {useNotification} from "../../../contexts/notification/index.tsx"

export default function Modal({children:product,disableModal}:{children:Product,disableModal:Function}){
    // Html elements
    const modalOverlay = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDivElement>(null);
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
    }

    function hiddeModal(){
        if(modalOverlay.current && modal.current){
            modalOverlay.current.classList.add("hidde");
            modal.current.classList.add("hidde");
            
            modal.current.addEventListener("animationend",()=>{
                disableModal();
            })
        }
    };
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
    
    // On change stock 
    useEffect(()=>{
        if(inputStock.current){
            inputStock.current.value = "1";
        }
    },[indexVersionSelected])




    return(
        <div ref={modalOverlay} className="modal-overlay" onClick={()=>{hiddeModal()}}>
            <div ref={modal} className="modal" onClick={(event)=>{event.stopPropagation()}}>
                <div className="modal__imgs">
                    <Carrusel imgs={productCopy.getImgs()} />
                </div>
                <div className="modal__content">

                    <div className="modal__content__info">
                        <p className="modal__content_name">{product.name}</p>
                        <p className="modal__content_price">${product.price}</p>   
                        <p className="modal__content_sku">SKU: {product.id}</p> 
                    </div>


                    <div className="modal__content__actions">
                        <div className="modal__content__actions__colors">
                            <strong>Color</strong>
                            <ColorPickerButtonGroup onColorSelect={setIndexVersionSelected} colors={product.getColors()} />
                        </div>          
                        <div className="modal__content__actions__stock">
                            <strong>Stock Disponible</strong>
                            <p>{productCopy.getStock()}</p>
                        </div>        
                        
                        <div className={'modal__content__actions__fade ' + (indexVersionSelected == null ? 'hidde':'show')}>

                            <div className='modal__content__actions__stock'>
                                <strong>Cantidad</strong>
                                <input type="number" defaultValue={1} ref={inputStock} min="1" max={productCopy.getStock()}/>
                            </div>                   

                            <div className="modal__content__actions__buttons">
                                    <Button onClick={handleAddProductToTrolley} >Agregar al carrito</Button>
                                    <Button style="filled" onClick={handleBuyProduct} >Comprar</Button>                       
                            </div> 
  
                        </div>
                      
                    </div>

                    

      
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    disableModal:PropTypes.func.isRequired
};