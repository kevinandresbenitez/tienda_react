import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './index.less'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import Button from "../../components/common/buttons/button/index.tsx";
import InputField from "../../components/common/inputField/index.tsx";


export default function SignIn() {

    return (

        <div className="sign-in-page">
            <form className="sign-in-form">
                <h1 className="sign-in-form__title" >Iniciar Sesion</h1>

                <div className="sign-in-form__inputs">
                    <InputField type="email" placeholder="Correo Electrónico" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="Por favor ingresa un correo válido (ej: nombre@gmail.com)"/>
                    <InputField type="password" placeholder="Contraseña" required minLength={8} maxLength={32} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" title="La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número" />
                </div>

                <div className="sign-in-form__actions">
                    <Button variant="outline" size="large" onClick={()=>{}}>Iniciar Sesion</Button>
                    <div className="sign-in-form__register">
                        <span>¿No tienes cuenta? <Link to="signUp">Registrarse</Link> </span>
                    </div>
                </div>
            </form>
        </div>
    )
}