import styled  from 'styled-components';
import fundo from '../../assets/images/success-background.svg';

export const Container = styled.div`
    background: var(--color-background-lighter);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    @media (min-width: 700px){
       display: grid;
        grid-template-columns: repeat(2,1fr);
    }
`;
export const LogoContainer = styled.div`
  background-color: var(--color-primary); 
  background-image: url(${fundo}); 
  background-size: contain;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  display: none;
  & img{
    max-width: 33.4rem;
    max-height: 9.8rem;
  }
  @media (min-width: 700px){
    height: 100vh;
    display: flex;
  }

`;
export const Logo = styled.div`

`;
export const PageTop =styled.div`
position: absolute;
display: flex;
width: 36.4rem;
justify-content: flex-start;
top: 0;
margin-top: 2rem;
`;
export const Subtitle = styled.div`
    font-family: Archivo;
    font-size: 3rem;
    color: var(--color-background);
    display: flex;
    justify-content: initial;
    width: 100%;
`;
export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100vh;
`;


export const LoginContainerItens = styled.div`



`;
export const LoginContainerItensText = styled.div`
  max-width: 27rem;
  font-family: Archivo;
  padding: 0.6rem;
  margin-bottom:2.6rem;
  & h2{
    font-style: normal;
    font-size: 3.6rem;
    line-height: 2.6rem;
    color: var(--color-text-title);
    padding: 1.5rem 0.6rem 4rem 0rem;
  }
  & span{
    font-size: 1.6rem;
    font-family: Poppins;
    font-style: normal;
  }

  
  @media (min-width: 700px){
  }
`;
export const InputGroup = styled.div`
  background: var(--color-input-background);
  border-radius: 0.8rem;
  border: 0.1rem solid var(--color-line-in-white);
  border-radius: 0.8rem;

`;


export const Button = styled.button`
  width: 100%;
  margin-top: 2rem;
  border-radius: 0.8rem;
  height:5.2rem;
  padding:0.6rem;
  outline: 0;
  background: var(--color-secundary);
  border: 0.1rem solid var(--color-line-in-white);
  cursor: pointer;
  font-size: 1.6rem;  
  font-family: Archivo;
  color: var(--color-button-text);
  transition: 0.2s;
  &:hover{
  background: var(--color-secundary-dark);

  }
`;



