import React, { useRef, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import { Product } from "../../../models/product/index.tsx";
import './index.less';
import Carrusel from "../../carrusel/index.tsx";
import ColorPickerButtonGroup from "../../colorPickerButtonGroup/index.tsx";

export default function Modal({children,disableModal}:{children:Product,disableModal:Function}){
    // Html elements
    const modalOverlay = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDivElement>(null);

    // Info elements
    const product:Product = children;
    const [filterProduct,setfilterProductList] =  useState<Product | null>(product);
    const [indexColorSelected,setIndexColorSelected] = useState<number | null>(null);
    const [productsImgs,setProductsImgs] = useState(getImgsProducts(product));


    useEffect(()=>{
        if(indexColorSelected != null ){
            const productFilter:Product = Object.assign({},product);
            productFilter.versions = [productFilter.versions[indexColorSelected]];
            setfilterProductList(productFilter);
        }else{
            setfilterProductList(product)
        }
    },[indexColorSelected])

    useEffect(()=>{
        if(filterProduct != null){
            setProductsImgs(getImgsProducts(filterProduct));
        }else{
            setProductsImgs(getImgsProducts(product));
        }
    },[filterProduct])


    function getImgsProducts(newproduct:Product):string[]{       
        const products = newproduct.versions.map((obj)=>obj.img);
        products.splice(1,0,product.imgTexture);
        return products;
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