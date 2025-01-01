// @ts-ignore
import EmpyCartSvg from '../../../../public/imgs/empty_cart.svg';
import './index.less'
import React, { useEffect, useState } from 'react';


export function EmptyCart(){
    const [img,setImg] = useState("");
    
    useEffect(()=>{
        setImg(EmpyCartSvg)    
    },[])
    
    return(
        <div className='emptyCart'>
            <div className='emptyCart__img'>
                <img src={img}></img>
            </div>
            <div className='emptyCart__info'>
                <p>No Hay productos en el carrito</p>
            </div>
        </div>


    )
}