import styled from 'styled-components';

export const InputBlock = styled.div`
    display: flex;
    align-items: center;
    & + .input-block{
        margin-top: 1.4rem;
    }
    & label{
        font-size: 1.4rem;    
        display: block;
        padding: 0 0.8rem;
        font-size: 1.6rem; 
        font-family: Archivo;
    }
    & input{
        height: 3rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        font: 1.6rem Poppins;
    }
    & input:checked{
        background: var(--color-secundary) !important;
    }
@media(min-width: 700px){    
    & + .input-block{
        margin-top: 0;
    
    }
}
`;