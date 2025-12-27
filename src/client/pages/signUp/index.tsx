import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/buttons/button/index.tsx";
import InputField from "../../components/common/inputField/index.tsx";
import './index.less';

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        const newFormData = { ...formData, [name]: value };
        setFormData(newFormData);

        if (name === "password" || name === "confirmPassword") {
            const form = e.target.closest('form');
            const confirmInput = form?.elements.namedItem('confirmPassword') as HTMLInputElement;

            if (confirmInput) {
                if (newFormData.password && newFormData.confirmPassword && newFormData.password !== newFormData.confirmPassword) {
                    confirmInput.setCustomValidity("Las contraseñas no coinciden");
                } else {
                    confirmInput.setCustomValidity("");
                }
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="sign-up-page">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h1 className="sign-up-form__title">Registrarse</h1>

                <div className="sign-up-form__inputs">
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Correo Electrónico"
                        required
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        title="Por favor ingresa un correo válido"
                        onChange={handleChange}
                    />
                    <InputField
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        required
                        minLength={8}
                        maxLength={32}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        title="Mínimo 8 caracteres, una mayúscula, una minúscula y un número"
                        onChange={handleChange}
                    />
                    <InputField
                        name="confirmPassword"
                        type="password"
                        placeholder="Reingresar Contraseña"
                        required
                        minLength={8}
                        onChange={handleChange}
                    />
                </div>

                <div className="sign-up-form__actions">
                    <Button variant="outline" size="large" onClick={()=>{}}>
                        Registrarse
                    </Button>
                    <div className="sign-up-form__login">
                        <span>¿Tienes cuenta? <Link to="/signIn">Iniciar Sesión</Link> </span>
                    </div>
                </div>
            </form>
        </div>
    )
}