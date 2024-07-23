import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './index.less';

export default function Carrusel({imgs}:{imgs:string[]}){
    const [indexSelected,setIndex] = useState(0);



    useEffect(()=>{
        const img = document.querySelectorAll(".carrusel__img")[indexSelected];
        const button = document.querySelectorAll(".carrusel__option")[indexSelected];

        const imgSelected = document.querySelectorAll(".carrusel__img.selected");
        const buttonSelected = document.querySelectorAll(".carrusel__option.selected");

        if(imgSelected.length > 0 ){
            imgSelected[0].classList.remove("selected");
            buttonSelected[0].classList.remove("selected");
        }

        img.classList.add("selected");
        button.classList.add("selected");
    },[indexSelected])

    // On change imgs array
    useEffect(()=>{
        setIndex(0);
    },[imgs])

    return(
        <div className='carrusel'>
            <div className='carrusel__imgs'>
                {imgs.map((img,key)=> < img src={img} className={`carrusel__img ${key === 0 ? "selected":''}`} key={key} />)}
            </div>
            
            <div className='carrusel__options'>
                {imgs.map((img,key)=><button onClick={()=>{setIndex(key)}} className={`carrusel__option ${key === 0 ? "selected":''}`} key={key}></button>)}
            </div>
        </div>
    )
}
Carrusel.prototype = {
    imgs : [PropTypes.arrayOf(PropTypes.string).isRequired]
}