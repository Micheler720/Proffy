import React , { ButtonHTMLAttributes} from 'react';
import './styles.css';

interface buttonsProps extends ButtonHTMLAttributes<ButtonHTMLAttributes<"submit">>  {
    label: string;
    
}
const ButtonSalvar: React.FC<buttonsProps> = ({ label, ...rest }) =>{
    return(
        <button type= "submit" className="button-salvar" >
            {label}
        </button>
    )
}
export default ButtonSalvar;
