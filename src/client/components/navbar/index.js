import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
    <div>
        Esto es la barra de navegacion
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
    </div>
    )
}