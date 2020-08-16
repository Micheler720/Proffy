import React from 'react';
import PageHeaderProfile from '../../Components/PageHeaderProfile';
import { ContainerProfile, InputGroup1X1, InputGroup2X1 } from './styles';
import { Form, Fieldset, Legend } from '../../Components/Form';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';

function Profile (){
  return(
    <ContainerProfile>
      <PageHeaderProfile 
      name="Michele de Freitas Ribeiro"
      subject="Matematica"
      />
      <Form
      labelButton="Salvar Cadastro"
      >
        <Fieldset>
          <Legend title="Seus Dados" />
          <InputGroup1X1>
            <Input
            type="text"
            name="name"
            id="name"
            label="Nome"
            />   
            <Input
            type="text"
            name="surname"
            id="surname"
            label="Sobrenome"
            />        
          </InputGroup1X1>            
          <InputGroup2X1>
            <Input
            label="E-mail"
            id="email"
            name="email"
            type="text"
            />
            <Input 
            label="WhatsApp"
            id="whatsapp"
            name="whatsapp"
            type="text"
            />
          </InputGroup2X1>
          <TextArea
          name="bio"
          label="Biografia"
          id="bio"
          />
        </Fieldset>
        <Fieldset>
          <Legend title="Sobre a aula" /> 
          <InputGroup2X1>
            <Input
            label="E-mail"
            id="email"
            name="email"
            type="text"
            />
            <Input 
            label="WhatsApp"
            id="whatsapp"
            name="whatsapp"
            type="text"
            />
          </InputGroup2X1>
        </Fieldset>

      </Form>
    </ContainerProfile>
  );
}
export default Profile;