import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Product } from "../../../models/product/index.tsx";
import './index.less';
import ModalProduct from "../modal/index.tsx";
import  Button  from "../../common/button/index.tsx";
import { Link } from 'react-router-dom';

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
            {isModalActive && <ModalProduct disableModal={disableModal}>{children}</ModalProduct>}

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
                <hr className="separator" />
                <p>${product.price}</p>
            </div>
            
            <div className="card__buttons">
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }} >
                    <Button onClick={()=>{}}>Detalles</Button>
                </Link>
            </div>
        </div>
    )
}