import React, { useRef, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import { Product} from "../../../models/product/index.tsx";
import './index.less';
import Carrusel from "../../carrusel/index.tsx";
import ColorPickerButtonGroup from "../../colorPickerButtonGroup/index.tsx";
import { Button } from "../../button/index.tsx";
import { useTrolley} from "../../../contexts/TrolleyContext/index.tsx";
import { useTrolleyType } from "../../../types/useTrolleyType.tsx";

export default function Modal({children:product,disableModal}:{children:Product,disableModal:Function}){
    // Html elements
    const modalOverlay = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDivElement>(null);
    const inputStock = useRef<HTMLInputElement>(null);

    // Info elements
    const [indexVersionSelected,setIndexVersionSelected] = useState<number | null>(null);
    const productCopy = Product.copy(product);


    // Hooks
    const {addProductToTrolley}:useTrolleyType = useTrolley();

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
                    <p className="modal__content_name">{product.name}</p>
                    <p className="modal__content_price">${product.price}</p>   
                    <p className="modal__content_sku">SKU: {product.id}</p> 

                    <div className="modal__content_section">
                        <div className="modal__content_section_color">
                            <strong>Color</strong>
                            <ColorPickerButtonGroup onColorSelect={setIndexVersionSelected} colors={product.getColors()} />
                        </div>          
                        <div className="modal__content_section_stock">
                            <strong>Stock Disponible</strong>
                            <p>{productCopy.getStock()}</p>
                        </div>        

                        <div className="modal__content_section_stock">
                            <strong>Cantidad</strong>
                            <input type="number" defaultValue={1} ref={inputStock} min="1" max={productCopy.getStock()}/>
                        </div>                   

                        <div className="modal__content_section_buttons">
                            <Button onClick={()=>{addProductToTrolley(productCopy)}}>Agregar al carrito</Button>                    
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