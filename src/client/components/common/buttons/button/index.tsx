import React from 'react'
import PropTypes from 'prop-types';
import './index.less'


type buttonType = {
    children: React.ReactNode,
    onClick: (...args: any[]) => any,
    variant?: "primary" | "secondary" | "outline",
    size?: "small" | "medium" | "large" | "full",
    type?: "button" | "submit" | "reset",
}
/**
 * Un componente de botón reutilizable.
 * 
 * @param {function} props.onClick - Función a ejecutar cuando se hace clic en el botón.
 * @param {React.ReactNode} props.children - Contenido que se mostrará dentro del botón.
 * @returns {JSX.Element} - Un elemento de botón con las propiedades especificadas y la clase css "button"
 */
export default function Button({ children, onClick, type = "button", variant = "primary", size = "medium" }: buttonType) {
    return (
        <button type={type} className={`btn btn-${variant} btn-${size} btn-${type}`} onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};