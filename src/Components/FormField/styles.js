import styled, { css } from 'styled-components';

export const InputBlock = styled.div`
    height: 5rem;
    width: 35.2rem;
    display: flex;
    justify-content: space-between;
    border: 0.1rem solid var(--color-line-in-white);
    padding: 0.4rem;
    &:focus-within {
          border-left: 0.3rem solid var(--color-primary);
    }
    & input:not(:placeholder-shown) ~ label{
      transform: scale(.7) translateY(-3rem);
      padding-top: 0.65rem !important;
      padding-left: 0 !important;
    }
    & label{
        display: flex;
        padding: 0.8rem;
        font-family: 'Archivo';
        font-size:1.6rem;
        padding: 0.4rem;
        position: absolute; 
        line-height: 5rem; 
    }
    & input{
         width: calc(100% - 1.2rem);
         border: 0;
         outline: 0;
         font-family: 'Archivo';
         padding: 1rem 0.8rem 0.8rem 0.8rem;
        background: var(--color-input-background);     
        &:focus{

        }   
        &:focus:not([type='color']) + label {
              transform: scale(.7) translateY(-3rem);
              padding-top: 0.65rem !important;
              padding-left: 0 !important;
        }
        
        /*${({ value }) => {
          const hasValue = value === "";
          console.log(value);
          return hasValue && css`
          &:not([type='color']) + label {
              transform: scale(.6) translateY(-10px);
              }
            `;
	        }
        }*/
    }
    & button{
      border:0;
      height:auto;
      width: auto;
      background: transparent;
      outline:0;
      cursor:pointer;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
`;