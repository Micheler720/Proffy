import React, { useState, useEffect, ChangeEvent } from 'react';
import PageHeaderProfile from '../../Components/PageHeaderProfile';
import { ContainerProfile, InputGroup1X1, InputGroup2X1, InputGroup2X1X1,ButtonDeleteHour } from './styles';
import { Form, Fieldset, Legend } from '../../Components/Form';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import Select from '../../Components/Select';
import api from '../../services/api';

interface Subject {
  id: Number,
  description: string,
}

function Profile (){
  const valuesInitial = {
    name: "",
    surname: "",
    email: "",
    whatsapp: "",
    bio: "",  
    subject: "",
    cost: "",
    schedules: [
      {week_day: "", from: "", to: ""}
    ],
  }
  const [ subjects, setSubjects ] = useState([]);
  const [values, setValues] = useState(valuesInitial);
  function setValue(chave: string, valor: string) {
    setValues({
      ...values,
      [chave]: valor,
    });        
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const { value , name } = e.target;
    setValue(name, value);
  }
  function handleChangeSelect(e: ChangeEvent<HTMLSelectElement>){
    const { value , name } = e.target;
    setValue(name, value);
  }
  function handleChangeTextArea(e: ChangeEvent<HTMLTextAreaElement>){
    const { value , name } = e.target;
    setValue(name, value);
  }
  function addNewSchedulaItem(){
    
  }

  useEffect( ()=>{
    api.get('subjects').then(response => {
      const dados = response.data.subjects;
      const arraySubjects = dados.map((item: Subject)=>{
        return(
          {value: item.id, label: item.description}
        );
      });
      setSubjects(arraySubjects);
    });
  },[]);
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
            onChange={handleChange}
            value={values.name}
            />   
            <Input
            type="text"
            name="surname"
            id="surname"
            label="Sobrenome"
            onChange={handleChange}
            value={values.surname}
            />        
          </InputGroup1X1>            
          <InputGroup2X1>
            <Input
            label="E-mail"
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            value={values.email}
            />
            <Input 
            label="WhatsApp"
            id="whatsapp"
            name="whatsapp"
            type="text"
            onChange={handleChange}
            value={values.whatsapp}
            />
          </InputGroup2X1>
          <TextArea
          name="bio"
          label="Biografia"
          id="bio"
          value={values.bio}
          onChange={handleChangeTextArea}
          />
        </Fieldset>
        <Fieldset>
          <Legend title="Sobre a aula" /> 
          <InputGroup2X1>
            <Select
            label="Matéria"
            id="subject"
            name="subject"
            options={subjects}
            onChange={handleChangeSelect}
            value={values.subject}
            />
            <Input 
            label="Custo da sua hora por aula"
            id="cost"
            name="cost"
            type="number"
            onChange={handleChange}
            value={values.cost}
            />
          </InputGroup2X1>          
        </Fieldset>
        <Fieldset>
          <Legend title="Horários Disponiveis"> 
            <button 
            className="button-new-hour"
            onClick={addNewSchedulaItem}
            > + Novo Horário</button>
          </Legend>
          {values.schedules.map((item, index)=>{
            return(
                <InputGroup2X1X1 key={index}>
                  <Select 
                  name="week_day"
                  id="week_day"
                  label="Dia da Semana"
                  options={[
                    {value: "0", label: "Domingo"},
                    {value: "1", label: "Segunda-feira"},
                    {value: "2", label: "Terça-Feira"},
                    {value: "3", label: "Quarta-Feira"},
                    {value: "4", label: "Quinta-Feira"},
                    {value: "5", label: "Sexta-Feira"},
                    {value: "6", label: "Sabado"},
                  ]}
                  onChange={handleChangeSelect}
                  value={item.week_day}
                  />
                  <Input
                  type= "time"
                  name="from"
                  id="from"
                  label="De" 
                  onChange={handleChange}  
                  value= {item.from}    
                  />   
                  <Input
                  type= "time"
                  name="to"
                  id="to"
                  label="Até"         
                  value={item.to} 
                  onChange={handleChange}              
                  /> 
                  <ButtonDeleteHour className='button-delete-hour'>
                    Excluir Horário
                  </ButtonDeleteHour>          
              </InputGroup2X1X1>
            );
          })
        }             
        </Fieldset>
      </Form>
    </ContainerProfile>
  );
}
export default Profile;