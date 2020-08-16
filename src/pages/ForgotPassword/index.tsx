import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import FormField from '../../Components/FormField';
import { Container, PageTop, LogoContainer, LoginContainer,  Subtitle, InputGroup, LoginContainerItens, Button, LoginContainerItensText } from './styles';

function ForgotPassword(){
  return(
    <Container>
      <LoginContainer>
                <PageTop>
                    <Link to="/"> 
                      <img src={backIcon} alt="Logo" />
                    </Link>
                </PageTop>
                <LoginContainerItens>
                    <LoginContainerItensText>
                        <h2> Eita, esqueceu sua senha? </h2> 
                        <span>
                          Não esquenta, vamos dar um jeito nisso.
                        </span>
                    </LoginContainerItensText>
                    <InputGroup>
                            <FormField 
                            type="text"
                            placeholder="" 
                            name="email" 
                            label="E-mail"                        
                            />                           
                    </InputGroup>
                    
                    <Button id="button-login" 
                    >
                        Enviar
                    </Button>
                </LoginContainerItens>

            </LoginContainer>
            <LogoContainer>
                <LogoContainer>
                    <img src={logo} alt="Logo "/>
                    <Subtitle>
                        Sua plataforma de <br />
                         estudos online.
                    </Subtitle>
                </LogoContainer>
            </LogoContainer>
    </Container>
  );
}
export default ForgotPassword;