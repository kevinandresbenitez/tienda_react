import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Product } from "../../models/product/index.tsx";
import './card.less';
import Modal from "./modal.tsx";
export default function Card({children}:{children:Product}){
    const product:Product = children;
    const [isModalActive,setModalStatus] = useState(false);

    const enableModal =()=>{
        setModalStatus(true)
    };
    const disableModal =()=>{
        setModalStatus(false)
    };

    return(

        <div className="card">
            {/* Enable modal */}
            {isModalActive && <Modal disableModal={disableModal}>{children}</Modal>}

            {/* Card Content */}
            <div className="card__imgs">
                <div className="card__img__container">
                    <img className="card__img" src={product.versions[0].img} />
                    <img className="card__img" src={product.imgTexture} />
                </div>
                <button className="card__img__pop__button" onClick={()=>{enableModal()}}>Vista rapida</button> 
            </div>
            <div className="card__info">
                <p>{product.name}</p>
                <p>${product.price}</p>
            </div>
            <div className="card__buttons">
                {/* <button className="card__buttons__button">Agregar al carrito</button> */}
                <a  href="/" className="card__buttons__button">Detalles</a>
            </div>
        </div>
    )
}