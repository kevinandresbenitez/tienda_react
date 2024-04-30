import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { Product } from "../../models/product/index.tsx";
import './modal.less';

export default function Modal({children,disableModal}:{children:Product,disableModal:Function}){
    const product:Product = children;
    const modalOverlay = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDivElement>(null);

    const hiddeModal = ()=>{
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
                <div className="modal__imgs"></div>
                <div className="modal__content"></div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    disableModal:PropTypes.func.isRequired
};