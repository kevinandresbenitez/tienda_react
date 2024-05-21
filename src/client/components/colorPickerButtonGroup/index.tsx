import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import './index.less';

type OnColorSelectFunction = (index: number) => void;

export default function ColorPickerButtonGroup({colors,onColorSelect}:
    {colors:string[],onColorSelect:OnColorSelectFunction}){

    function onClickSelectColor(buttonElement:HTMLButtonElement,key:number){
        document.querySelectorAll(".colorPickerGroup.selected")[0].classList.remove("selected");
        buttonElement.classList.add("selected");
        onColorSelect(key);
    }

    return(
        <div className="colorPickerGroup">
            {colors.map((color,key)=><button onClick={(event)=>{onClickSelectColor(event.target as HTMLButtonElement,key)}} style={{ backgroundColor: color }} className={`colorPickerGroup ${key == 0 ? "selected":""}`}></button>)}
        </div>
    )

}

ColorPickerButtonGroup.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onColorSelect: PropTypes.func.isRequired,
}