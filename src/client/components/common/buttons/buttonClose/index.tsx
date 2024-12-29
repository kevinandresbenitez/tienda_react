import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './index.less';


/**
 * ButtonClose Component
 *
 * Un botón que muestra un ícono de cerrar (X) utilizando Font Awesome.
 * Este componente esta en la esquina superior derecha
 * Ideal para cerrar modales o paneles.
 *
 * 
 * @param {Function} props.onClick - Función que se ejecuta al hacer clic en el botón.
 *
 * @returns {JSX.Element} Un botón con un ícono de cerrar.
 */
export default function ButtonClose({onClick:handleClick}:{onClick:() => void}){
    return(
        <button className="close__button" onClick={handleClick}>
            <FontAwesomeIcon icon={faXmark} />
        </button>

    )
}