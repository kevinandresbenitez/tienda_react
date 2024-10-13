import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import './index.less';
import RGBColor from "../../../types/color.tsx";

/**
 * Component for rendering a color picker button group.
 * @param colors An array of color in hexadecimal.
 * @param onColorSelect Callback function to handle color selection.
 */
export default function ColorPickerButtonGroup({colors,onColorSelect}:
    {colors:RGBColor[],onColorSelect:(index: number | null) => void}){

    function onClickSelectColor(buttonElement:HTMLButtonElement,key:number){
        const selectedElement = document.querySelectorAll(".colorPickerGroup.selected")[0]
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
            {colors.map((color,key)=><button key={key} onClick={(event)=>{onClickSelectColor(event.target as HTMLButtonElement,key)}} style={{ backgroundColor: color.toHex() }} className={"colorPickerGroup"}></button>)}
        </div>
    )

}

ColorPickerButtonGroup.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.instanceOf(RGBColor)).isRequired,
    onColorSelect: PropTypes.func.isRequired,
}