import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import './index.less';

/**
 * Component for rendering a color picker button group.
 * @param colors An array of color in hexadecimal.
 * @param onColorSelect Callback function to handle color selection.
 */
export default function ColorPickerButtonGroup({colors,onColorSelect}:
    {colors:string[],onColorSelect:(index: number | null) => void}){

    useEffect(()=>{
        const elements = document.querySelectorAll(".colorPicker__button")

        if(elements.length == 1){
            onClickSelectColor(elements[0] as HTMLButtonElement,0)
        }

    },[])  

    function onClickSelectColor(buttonElement:HTMLButtonElement,key:number){
        const selectedElement = document.querySelectorAll(".colorPicker__button.selected")[0];
        if(selectedElement){
            selectedElement.classList.remove("selected");
        }
        if(selectedElement == buttonElement){
            onColorSelect(null);
            return true
        }
       
        buttonElement.classList.add("selected");
        onColorSelect(key);
    }

    return(
        <div className="colorPickerGroup">
            {colors.map((color,key)=>
                <button key={key} 
                    onClick={(event)=>{onClickSelectColor(event.target as HTMLButtonElement,key)}} 
                    style={{ backgroundColor: color }} 
                    className={'colorPicker__button'}>
                </button>)}
        </div>
    )

}

ColorPickerButtonGroup.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onColorSelect: PropTypes.func.isRequired,
}