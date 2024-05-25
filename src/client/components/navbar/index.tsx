import React from "react";
import { Link } from "react-router-dom";
import './index.less';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "../hamburgerButton/index.tsx";

export default function NavBar(){
    return(
    <div className="navbar">

        <Hamburger />

        <div className="navbar__logo">
            <Link to="/">Biba</Link>
            <Link to="/">Bolsas llenas de color</Link>
        </div>

        <nav className="navbar__links">
            <Link to="/">Tienda</Link>
            <Link to="/about">Acerca De</Link>
            <Link to="/faq">Faq</Link>
            <Link to="/contact">Contacto</Link>
        </nav>
        <div className="navbar__actions">
            <Link to="/about"> <FontAwesomeIcon icon={faUser} /><p>Iniciar Sesion</p></Link>
            <Link to="/about" ><FontAwesomeIcon icon={faCartShopping} /></Link>
        </div>
        
        
    </div>
    )
}