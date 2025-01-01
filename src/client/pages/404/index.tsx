// @ts-ignore
import NotFoundIMG from '../../public/imgs/404_notFound.svg';
import './index.less'
import React, { useEffect, useState } from 'react';

export default function PageNotFound(){

    const [img,setImg] = useState("");
    
    useEffect(()=>{
        setImg(NotFoundIMG)    
    },[])

    return(
        <div className='container'>            
            <div className="container__img">
                <img src={img}></img>
            </div>

            <div className="container__info">
                <p>Pagina no encontrada</p>
            </div>
        </div>

    )
}