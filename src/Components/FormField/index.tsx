import React, { InputHTMLAttributes, useState, ButtonHTMLAttributes } from 'react';
import passwordIcon from '../../assets/images/icons/password.svg'

import { InputBlock } from './styles';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    type: string,
    name: string,
    placeholder?: string,
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label?: "",
}


const FormField: React.FC<FormFieldProps> =  ({type, name, label, placeholder, ...rest }) => {
    return(
        <InputBlock >
            <input  
            type={type}
            name={name} 
            placeholder= {placeholder}
            />
            <label htmlFor={name}>{label}</label>
            {type === "password" 
                ? <ButtonShowPassword />
                : ""
            }
        </InputBlock>

    );
}

const ButtonShowPassword: React.FC<ButtonProps> = () =>{
    const [typePassword, setTypePassword] = useState('password');
    function handleVisiblePassword(){
        setTypePassword(typePassword === 'password' ? 'text' : 'password');
    }
    return(
        <button onClick={handleVisiblePassword}>
                    <img src={passwordIcon} alt="Mostrar Senha" />
        </button>
    );
}
export default FormField;