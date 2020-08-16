import React, { TextareaHTMLAttributes } from 'react';
import './styles.css';
interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    id: string;
    label: string;
}

const TextArea: React.FC<InputProps> = ({label, id, name, ...rest}) => {
    return(
        <div className="textArea-block">
            <label htmlFor={id}>{label}</label>
            <textarea id={id}  {...rest} />
        </div>
    );

}
export default TextArea;