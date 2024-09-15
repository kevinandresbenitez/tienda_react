import React from 'react'
import PropTypes from 'prop-types';
import './index.less'


type buttonType ={
    children:React.ReactNode,
    onClick: () => void,
    style?: "default" | "filled"
}
/**
 * Un componente de botón reutilizable.
 * 
 * @param {function} props.onClick - Función a ejecutar cuando se hace clic en el botón.
 * @param {React.ReactNode} props.children - Contenido que se mostrará dentro del botón.
 * @returns {JSX.Element} - Un elemento de botón con las propiedades especificadas y la clase css "button"
 */
export default function Button({children,onClick,style = "default"}:buttonType){
    return(
        <button  className={`button ${style}`} onClick={()=>{onClick()}}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};