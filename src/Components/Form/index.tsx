import React, { FormHTMLAttributes , FieldsetHTMLAttributes} from 'react';
import ButtonSalvar from '../../Components/ButtonSalvar';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

interface PropsForm extends FormHTMLAttributes<HTMLFormElement> {
    labelButton: string;
}
interface PropsFieldset extends FieldsetHTMLAttributes<HTMLFieldSetElement>{
}
interface PropsLegend {
    title: string;
} 

export const Legend: React.FC<PropsLegend> = (({children, title}) => {
    return(
        <legend>
            {title}
            {children}
        </legend>
    );
});

export const Form: React.FC<PropsForm> = ({ children,labelButton, ...rest}) =>{
    return(
        <form onSubmitCapture={rest.onSubmit} >
            {children}
            <footer>
                <p>
                    <img src={warningIcon} alt="WarningIcon"/>
                    Importante! <br />
                    Preencher todos os dados.
                </p>    
                    <ButtonSalvar label={labelButton} />
            </footer>        
        </form>

    );
}
export const Fieldset: React.FC<PropsFieldset> = (props)=>{
    return(
        <fieldset>
            {props.children}
        </fieldset>

    );
}

