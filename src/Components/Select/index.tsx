import React, { SelectHTMLAttributes } from 'react';
import './styles.css';
interface selectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    id: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>
}

const Select: React.FC<selectProps> = ({label, id, name, options, ...rest}) => {
    return(
        <div className="select-block">
            <label htmlFor={id}>{label}</label>
            <select value="" id={id}  name={name} {...rest}>
                <option value="" disabled  hidden > Selecione uma opção</option>
                {options.map(item=>{
                    return(
                        <option key={item.value} value={item.value}>{item.label}</option>
                    )
                })}
            </select>
        </div>
    );

}
export default Select;