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
  @media(min-width: 700px){
    display: grid;
    grid-template-columns: 2fr repeat(2,1fr);
    width:100%;
    & div:first-child{
      margin-right: 5% ;
    }
  }
`