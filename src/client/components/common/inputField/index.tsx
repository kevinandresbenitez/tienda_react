import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faEye,faEyeSlash,faLock } from "@fortawesome/free-solid-svg-icons";
import './index.less'

type AllowedInputTypes = "email" | "password"

export default function InputField({ type , placeholder, ...props }: { type: AllowedInputTypes; placeholder: string } & React.InputHTMLAttributes<HTMLInputElement>) {

    const inputRef = useRef<HTMLInputElement>(null);
    const cursorPositionRef = useRef<number | null>(null);

    const [showPassword, setShowPassword] = useState(false);

    const isPasswordType = type === 'password';
    const inputType = isPasswordType && showPassword ?  'password':'text';

    const WrapperTag = isPasswordType ? 'div' : 'label';

    let leftIcon = null;

    if(type === 'email'){
        leftIcon = faEnvelope;
    } else if(type === 'password'){
        leftIcon = faLock;
    }

    const handleToggle = () => {
        setShowPassword(!showPassword);
        if (inputRef.current) {
            cursorPositionRef.current = inputRef.current.selectionStart;
        }
    }

    useLayoutEffect(() => {

        if (inputRef.current && cursorPositionRef.current !== null) {
            
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                    inputRef.current.setSelectionRange(cursorPositionRef.current, cursorPositionRef.current);
                }
            }, 0);


        }
    }, [showPassword]);


    return (

        <WrapperTag className="input-field">
            
            {leftIcon && (
                <FontAwesomeIcon icon={leftIcon} className="input-field__icon" onClick={()=>{ inputRef.current?.focus()}} />
            )}

            <input 
                ref={inputRef}
                type= {inputType}
                className="input-field__input" 
                placeholder={placeholder}
                {...props}
            />

            {isPasswordType && (
                <FontAwesomeIcon 
                    icon={showPassword ? faEyeSlash : faEye} 
                    className="input-field__icon input-field__icon--action"
                    onClick={handleToggle }
                    onMouseDown={(event)=>{event.preventDefault()}}
                    style={{ cursor: 'pointer' }}
                />
            )}
            
        </WrapperTag>


    )
}