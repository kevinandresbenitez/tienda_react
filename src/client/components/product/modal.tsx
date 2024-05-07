import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { Product } from "../../models/product/index.tsx";
import './modal.less';
import Carrusel from "../carrusel/index.tsx";

export default function Modal({children,disableModal}:{children:Product,disableModal:Function}){
    // Html elements
    const modalOverlay = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDivElement>(null);

    // Info elements
    const product:Product = children;
    const [focusedProduct,setFocusedProduct] = useState(null);
    const [productsImgs,setProductsImgs] = useState(getImgsProducts());

    function getImgsProducts():string[]{
        return [product.imgTexture,...product.versions.map((obj)=>obj.img)]
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
                    <Carrusel imgs={productsImgs} />
                </div>
                <div className="modal__content"></div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    disableModal:PropTypes.func.isRequired
};