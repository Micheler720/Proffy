import React, { useState, useEffect, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import api from '../../services/api';
import ButtonSalvar from '../../Components/ButtonSalvar';

interface SubjectsProps{
    id: number;
    description: string;
};

function TeacherList(){
    const [ subject, setSubject ] = useState('');
    const [ weekDay, setWeekDay ] = useState('');
    const [ time, setTime ] = useState('');
    const [materias, setMaterias] = useState([]);
    const [ teachers, setTeachers] = useState([]);
    useEffect(()=>{
        api.get("subjects").then(response => {
            const { subjects } = response.data;
            const arraySubjects = subjects.map((item: SubjectsProps)=>{
                return {value: item.id, label: item.description}
            });
            setMaterias(arraySubjects);
        });   
    }, []);
    async function handleSearchTeacher(e: FormEvent){
        e.preventDefault();
        const classes = await api.get('class',{
            params: {
                subject_id: subject,
                week_day: weekDay,
                time,
            }
        });
        const dados = classes.data;
        setTeachers(dados);
        console.log(classes);
    }
    
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader
                title= "Estes são os Proffys Disponiveis"
            />
            <main>
                <form id="seacher-teachers" onSubmit={handleSearchTeacher}>
                <Select
                id="subject"
                name="subject"
                label="Materia"
                options= {materias}
                value={subject}
                onChange={(e) => {setSubject(e.target.value)}}
                />
                <Select
                id="week_day"
                name="week_day"
                label="Dia da Semana"
                value={weekDay}
                onChange={(e) => {setWeekDay(e.target.value)}}
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
                id= "hour"
                label= "Hora"
                name="hour"
                type="time"
                value={time}
                onChange={(e) => {setTime(e.target.value)}}
                />
                <ButtonSalvar label="Buscar"  />
                </form>
                {teachers.map((teacher: Teacher) => {
                    return(
                        <TeacherItem key={teacher.id}  teacher= {teacher} />
                    )
                })}
            </main>
        </div>
    );
};
export default TeacherList;