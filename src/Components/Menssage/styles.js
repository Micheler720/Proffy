import styled from 'styled-components';
import fundo from '../../assets/images/success-background.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--color-primary);
  background-image: url(${fundo}); 
  background-size: contain;

  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;
export const ContainerItens = styled.div`
  width: 54rem;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  & a{
    background: var(--color-secundary);
    transition: 0.2s;
    outline: 0;
    border:0;
    color: var(--color-button-text);
    width: 19.7rem;
    height:5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;  
    text-decoration: none;
    border-radius: 0.8rem;  
    margin-top: 4rem;
    &:hover{
      background: var(--color-secundary-dark);
    }
  }
`;
export const TituloText = styled.h2`
  font-family: Archivo;
  text-align: center;
  font-size:3.4rem;
  line-height: 2.2rem;
  color: var(--color-title-in-primary);
  margin-top:2.6rem;
  @media (min-width: 700px){
    font-size:5.4rem;
    line-height: 4.2rem;
    margin-top:5.6rem;
  }
`;
export const SubtitleText = styled.span`
  font-family: Poppins;
  font-size: 1.5rem;
  color: var(--color-text-in-primary);
  line-height: 1.5rem;
  text-align: center;
  margin-top: 3.6rem;
  max-width: 40rem;
  @media (min-width: 700px){
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;