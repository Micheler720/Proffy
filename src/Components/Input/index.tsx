import React, { InputHTMLAttributes } from 'react';
import './styles.css';
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    name: string;
    placeholder?: string;
    id: string;
    label: string;
}

const Input: React.FC<InputProps> = ({label, id, type, placeholder, name, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} name={name} {...rest} />
        </div>
    );

}
export default Input;