import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import Select from '../../Components/Select';
import { Form, Fieldset, Legend } from '../../Components/Form';
import './styles.css';
import api from '../../services/api';

interface Subjects {
    id: Number;
    description: string;
}


function Teacher(){
    const history = useHistory();
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWatsapp] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItens, setScheduleItens] = useState([
        { week_day: 0 , from: "", to: ""}
    ]);
    const [ materias, setMaterias] = useState([]);
    useEffect(()=> {
        api.get('subjects').then(response =>{
            const subjects = response.data.subjects;
            const arraySubjects = subjects.map((item: Subjects)=>{
                return(
                    {value: item.id, label: item.description}
                );
            });
            setMaterias(arraySubjects);
        });
    }, []);
    
    function addNewScheduleItem(){
        setScheduleItens([
            ...scheduleItens,
            { week_day: 0 , from: "", to: ""}
        ]);
    }
    function setScheduleItemValue(position: number, field: string, value: string){
        const updateSchedulaItens = scheduleItens.map( (scheduleItem, index)=>{
            if(position === index){
                return {...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });
        setScheduleItens(updateSchedulaItens);
    }
    
    function handleCreateClass(e: FormEvent){
        e.preventDefault();
        console.log({name, avatar, whatsapp,bio,
            subject,
            cost,
            schedule: scheduleItens});
        api.post('class',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItens
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch((err) => {
            console.log(err);
            alert('Erro no cadastro' );
        });
    }

    return (
        <div id="page-teacher-form" className="container">
        <PageHeader
            title= "Que incrivel que você quer dar aulas"
            description="O primeiro passo, é preencher este formulário de inscrição."
        />
        <main >
            <Form 
            labelButton = "Savar Formulário" 
            onSubmit= {handleCreateClass}
            >
                <Fieldset >
                    <Legend title="Seus Dados" />
                    <Input 
                    name= "name"
                    label= "Nome Completo"
                    id= "name"
                    type="text"
                    value={name}
                    onChange={(e)=> {setName(e.target.value)}}
                    />
                    <Input 
                    name= "avatar"
                    label= "Avatar"
                    id= "avatar"
                    type="text"
                    value={avatar}
                    onChange={(e)=> {setAvatar(e.target.value)}}
                    />
                    <Input 
                    name= "whatsapp"
                    label= "WhatsApp"
                    id= "whatsapp"
                    type="text"
                    value={whatsapp}
                    onChange={(e)=> {setWatsapp(e.target.value)}}
                    />                    
                    <TextArea 
                    id="bio"
                    label="Biografia"
                    name="bio"
                    value={bio}
                    onChange={(e)=> {setBio(e.target.value)}}
                    />
                </Fieldset>
                <Fieldset >
                    <Legend title="Sobre a aula">
                        <Link 
                        to="/subjects"
                        className="link-form"
                        > + Matérias</Link>
                    </Legend>
                    <Select
                    id="subject"
                    name="subject"
                    label="Materia"
                    value={subject}
                    onChange={(e)=> {setSubject(e.target.value)}}
                    options= {materias}
                    />                    
                    <Input 
                    name= "cost"
                    label= "Custo da sua hora por aula"
                    id= "cost"
                    type="number"
                    value={cost}
                    onChange={(e)=> {setCost(e.target.value)}}
                    />
                </Fieldset>
                <Fieldset>
                    <Legend title="Horários disponíveis">
                        <button
                        type="button"
                        onClick={addNewScheduleItem}
                        >+ Novo Horário</button>
                    </Legend>
                    {scheduleItens.map((scheduleItem, index) => {
                    return(
                        <div key={index} className="schedule-item">
                            <Select
                            id="week_day"
                            name="week_day"
                            label="Dia da Semana" 
                            value={scheduleItem.week_day}
                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}                       
                            options= {[
                                {value : "0", label: "Domingo"},
                                {value : "1", label: "Segunda"},
                                {value : "2", label: "Terça"},
                                {value : "3", label: "Quarta"},
                                {value : "4", label: "Quinta"},
                                {value : "5", label: "Sexta"},
                                {value : "6", label: "Sabado"}
                            ]}
                            />
                            <Input
                            type= "time"
                            name="from"
                            id="from"
                            label="De"
                            value={scheduleItem.from}
                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)}                         
                            />                    
                            <Input
                            type= "time"
                            name="to"
                            id="to"
                            label="Até"
                            value={scheduleItem.to}
                            onChange={e => setScheduleItemValue(index, 'to', e.target.value)}   
                            />
                        </div>
                    )
                    })}
                </Fieldset>
            </Form>            
        </main>
        </div>
    );
}
export default Teacher;