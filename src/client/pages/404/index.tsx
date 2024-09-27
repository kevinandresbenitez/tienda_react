// @ts-ignore
import NotFoundIMG from '../../public/imgs/404_notFound.svg';
import './index.less'
import React from 'react';

export default function PageNotFound(){
    return(
        <div className='container'>            
            <div className="container__img">
                <img src={NotFoundIMG}></img>
            </div>

            <div className="container__info">
                <p>Pagina no encontrada</p>
            </div>
        </div>

    )
}