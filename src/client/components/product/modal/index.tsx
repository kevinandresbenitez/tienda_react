import React, { useRef, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import { Product} from "../../../models/product/index.tsx";
import './index.less';
import Carrusel from "../../carrusel/index.tsx";
import ColorPickerButtonGroup from "../../colorPickerButtonGroup/index.tsx";

export default function Modal({children:product,disableModal}:{children:Product,disableModal:Function}){
    // Html elements
    const modalOverlay = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDivElement>(null);

    // Info elements
    const [indexVersionSelected,setIndexVersionSelected] = useState<number | null>(null);
    const productCopy = Product.copy(product);

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

    return(
        <div ref={modalOverlay} className="modal-overlay" onClick={()=>{hiddeModal()}}>
            <div ref={modal} className="modal" onClick={(event)=>{event.stopPropagation()}}>
                <div className="modal__imgs">
                    <Carrusel imgs={productCopy.getImgs()} />
                </div>
                <div className="modal__content">                    
                    <ColorPickerButtonGroup onColorSelect={setIndexVersionSelected} colors={product.getColors()} />
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    disableModal:PropTypes.func.isRequired
};