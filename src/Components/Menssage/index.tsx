import React from 'react';

import sucessIcon from '../../assets/images/icons/success-check-icon.svg';
import { Container, ContainerItens, TituloText, SubtitleText } from './styles.js';
import { Link } from 'react-router-dom';

function Menssage(){
  return(
    <Container>
      <ContainerItens>
        <img  src={sucessIcon} alt = "Sucesso" />
        <TituloText>
          Redefinição enviada
        </TituloText>
        <SubtitleText>
            Boa, agora é só checar o e-mail que foi enviado para você
            redefinir sua senha e aproveitar os estudos.
        </SubtitleText>
        <Link to="/">
          Voltar ao Login
        </Link>
      </ContainerItens>
    </Container>
  );
}
export default Menssage;