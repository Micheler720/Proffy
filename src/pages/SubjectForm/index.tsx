import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';
import './styles.css';
import api from '../../services/api';
import { Form, Fieldset } from '../../Components/Form';

function SubjectForm(){
    const [ subject, setSubject ] = useState('');
    const history = useHistory();
    function handleCreateSubject(e: FormEvent){
        e.preventDefault();
        api.post('subjects', {
            description: subject
        }).then(()=>{
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(()=>{
            alert('Erro ao realizar cadastro');
        });
    }

    return(
        <div id="page-subject" >
            <PageHeader 
            title= "Cadastro de Matérias"
            />
            <main className="container" id="page-subject-form">
                <Form 
                labelButton = "Cadastrar Matérias"
                onSubmit= {handleCreateSubject}
                >
                    <Fieldset
                    title= "Materia para cadastro"
                    >
                        <Input 
                        type="text"
                        name="subject"
                        id="subject"
                        label="Materia"
                        maxLength= {50}
                        value= {subject}
                        onChange= {(e) => {setSubject(e.target.value)}}
                        />
                    </Fieldset>                    
                </Form>
            </main>
        </div>
    );
}
export default SubjectForm;