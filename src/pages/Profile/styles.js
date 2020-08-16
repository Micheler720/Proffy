import Styled from 'styled-components';

export const ContainerProfile = Styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const InputGroup1X1 = Styled.div`
  @media(min-width: 700px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width:100%;
    & div:first-child{
      margin-right: 5% ;
    }
  }
`
export const InputGroup2X1 = Styled.div`
  @media(min-width: 700px){
    display: grid;
    grid-template-columns: 2fr 1fr;
    width:100%;
    & div:first-child{
      margin-right: 5% ;
    }
  }
`
export const InputGroup2X1X1 = Styled.div`
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-line-in-white);
  @media(min-width: 700px){
    display: grid;
    grid-template-columns: 2fr repeat(2,1fr);
    width:100%;
    & div:first-child , & div + div {
      margin-right: 5% ;
      
    }
  }
`
export const ButtonDeleteHour = Styled.button`
  background: #FFF;
  height: auto;
  width: 15rem;
  color: #E33D3D;
  font-family: Archivo;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: bold;
  outline: 0;
  border:0;
  cursor: pointer;

  position: absolute;
  margin-top: 14.5rem;
  margin-left:25.5rem;
  &:hover{
    color: #8b0000;
  }
`;