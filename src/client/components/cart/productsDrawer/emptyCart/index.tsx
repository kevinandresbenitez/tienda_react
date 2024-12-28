// @ts-ignore
import EmpyCartSvg from '../../../../public/imgs/empty_cart.svg';
import './index.less'
import React from 'react';


export function EmptyCart(){

    return(
        <div className='emptyCart'>
            <div className='emptyCart__img'>
                <img src={EmpyCartSvg}></img>
            </div>
            <div className='emptyCart__info'>
                <p>No Hay productos en el carrito</p>
            </div>
        </div>


    )
}