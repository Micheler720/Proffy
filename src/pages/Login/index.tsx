import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

import Checkbox from '../../Components/Checkbox';
import FormField from '../../Components/FormField';
import { Container, LogoContainer, LoginContainer,  Subtitle, InputGroup, LoginContainerItens, LoginPassword, Button, LoginContainerItensText, Footer } from './styles';

function Login(){
    const valuesInitial = {
        user: '',
        password: '',
    }
    const [ values, setValues ] = useState(valuesInitial);
    function setValue(chave: string, valor: string) {
        setValues({
          ...values,
          [chave]: valor,
        });        
    }
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value  } = e.target;  
        setValue(
          e.target.getAttribute('name') as string,
          value,
        );
    }

    return(
        <Container>
            <LogoContainer>
                <LogoContainer>
                    <img src={logo} alt="Logo "/>
                    <Subtitle>
                        Sua plataforma de <br />
                         estudos online.
                    </Subtitle>
                </LogoContainer>
            </LogoContainer>
            <LoginContainer>
                <LoginContainerItens>
                    <LoginContainerItensText>
                        Fazer Login
                    </LoginContainerItensText>
                    <InputGroup>
                            <FormField 
                            type="text"
                            placeholder="" 
                            name="email" 
                            value={values.user}
                            label="E-mail" 
                            onChange= {handleChange}                        
                            />
                            <FormField 
                            type="password"
                            placeholder="" 
                            name="password" 
                            value={values.password}
                            label="Senha" 
                            onChange= {handleChange}                        
                            />                            
                    </InputGroup>
                    <LoginPassword>
                        <Checkbox
                        type="checkbox"
                        label="Lembrar-me"
                        name="rememberPassword"
                        id="rememberPassword"
                        />
                        <Link to="/forgotPassword">
                            Esqueci minha senha
                        </Link>
                    </LoginPassword>
                    <Button id="button-login" 
                    >
                        Entrar
                    </Button>
                </LoginContainerItens>
                <Footer>
                    <span>
                        Não tem conta? <br />
                        <Link to="/registerAccount">Cadastre-se</Link>
                    </span>
                    <span>
                        É de graça <img src={heartIcon} alt="Coração" />
                    </span>

                </Footer>

            </LoginContainer>
        </Container>
    );
}

export default Login;