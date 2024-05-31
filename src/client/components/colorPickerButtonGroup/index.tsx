import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import './index.less';

type OnColorSelectFunction = (index: number) => void;

export default function ColorPickerButtonGroup({colors,onColorSelect}:
    {colors:string[],onColorSelect:OnColorSelectFunction}){

    function onClickSelectColor(buttonElement:HTMLButtonElement,key:number){
        const selectedElement = document.querySelectorAll(".colorPickerGroup.selected")[0]
        if(selectedElement){
            selectedElement.classList.remove("selected");
        }

       
        buttonElement.classList.add("selected");
        console.log(key)
        onColorSelect(key);
    }

    return(
        <div className="colorPickerGroup">
            {colors.map((color,key)=><button key={key} onClick={(event)=>{onClickSelectColor(event.target as HTMLButtonElement,key)}} style={{ backgroundColor: color }} className={"colorPickerGroup"}></button>)}
        </div>
    )

}

ColorPickerButtonGroup.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onColorSelect: PropTypes.func.isRequired,
}