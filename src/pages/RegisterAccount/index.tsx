import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import FormField from '../../Components/FormField';
import { Container, PageTop, LogoContainer, LoginContainer,  Subtitle, InputGroup, LoginContainerItens, Button, LoginContainerItensText } from './styles.js';

function RegisterAccount(){
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
                        <h2> Cadastro </h2> 
                        <span>
                          Preencha os dados abaixo para começar
                        </span>
                    </LoginContainerItensText>
                    <InputGroup>
                            <FormField 
                            type="text"
                            placeholder="" 
                            name="name" 
                            label="Nome"                        
                            />
                            <FormField 
                            type="text"
                            placeholder="" 
                            name="surname" 
                            label="Sobrenome"                        
                            />
                            <FormField 
                            type="text"
                            placeholder="" 
                            name="email" 
                            label="E-mail"                        
                            />
                            <FormField 
                            type="password"
                            placeholder="" 
                            name="password" 
                            label="Senha"                       
                            /> 
                            <FormField 
                            type="password"
                            placeholder="" 
                            name="confirmPassword" 
                            label="Confirme Senha"                       
                            />                            
                    </InputGroup>
                    
                    <Button id="button-login" 
                    >
                        Entrar
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
export default RegisterAccount;