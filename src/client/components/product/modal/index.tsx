import React, { useRef, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import { Product} from "../../../models/product/index.tsx";
import './index.less';
import Carrusel from "../../carrusel/index.tsx";
import ColorPickerButtonGroup from "../../colorPickerButtonGroup/index.tsx";

export default function Modal({children,disableModal}:{children:Product,disableModal:Function}){
    // Html elements
    const modalOverlay = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDivElement>(null);

    // Info elements
    const product:Product = children;
    const [filterProduct,setfilterProductList] =  useState<Product>(product);
    const [indexColorSelected,setIndexColorSelected] = useState<number | null>(null);


    useEffect(()=>{
        if(indexColorSelected != null ){
            // Copy object
            const filterProduct:Product = Object.assign({},product);
            filterProduct.versions = [filterProduct.versions[indexColorSelected]];            
            setfilterProductList(filterProduct);
        }else{
            setfilterProductList(product)
        }
    },[indexColorSelected])

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
                    <Carrusel imgs={Product.getImgsFromProduct(filterProduct)} />
                </div>
                <div className="modal__content">                    
                    <ColorPickerButtonGroup onColorSelect={setIndexColorSelected} colors={product.getColors()} />
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    disableModal:PropTypes.func.isRequired
};