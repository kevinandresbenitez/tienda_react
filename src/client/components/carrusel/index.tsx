import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

export default function Carrusel({imgs}:{imgs:string[]}){
    
    function changeSelection(itemNumber:number){         
        const img = document.querySelectorAll(".carrusel__img")[itemNumber];
        const imgSelected = document.querySelectorAll(".carrusel__img.selected")[0];
        const button = document.querySelectorAll(".carrusel__option")[itemNumber];
        const buttonSelected = document.querySelectorAll(".carrusel__option.selected")[0];


        // Remove class "selected" in old elemens
        imgSelected.classList.remove("selected");
        buttonSelected.classList.remove("selected");

        // Add elements selected
        img.classList.add("selected");
        button.classList.add("selected");

        
    }

    return(
        <div className='carrusel'>
            <div className='carrusel__imgs'>
                {imgs.map((img,key)=> < img src={img} className={`carrusel__img ${key === 0 ? "selected":''}`} key={key} />)}
            </div>
            
            <div className='carrusel__options'>
                {imgs.map((img,key)=><button onClick={()=>{changeSelection(key)}} className={`carrusel__option ${key === 0 ? "selected":''}`} key={key}></button>)}
            </div>
        </div>
    )
}
Carrusel.prototype = {
    imgs : [PropTypes.arrayOf(PropTypes.string).isRequired]
}