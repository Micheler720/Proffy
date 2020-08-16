import React, { InputHTMLAttributes } from 'react';
import { InputBlock } from './styles';
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    name: string;
    placeholder?: string;
    id: string;
    label: string;
}

const Checkbox: React.FC<InputProps> = ({label, id, type, placeholder, name, ...rest}) => {
    return(
        <InputBlock >
            <input id={id} type={type} placeholder={placeholder} name={name} {...rest} />
            <label htmlFor={id}>{label}</label>
        </InputBlock>
    );

}
export default Checkbox;