import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    name: string;
    materia: String;
    cost: Float32Array;
    bio: string;
    avatar: string;
}
interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher})=>{
    function createNewConnection(){
        api.post('connections',{
            user_id: teacher.id,
        })
    }
    return(        
    <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.materia}</span>
            </div>
        </header>
        <p>
            {teacher.bio}
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ {Number(teacher.cost).toFixed(2).replace(".",",")}</strong>
            </p>
            <button onClick={createNewConnection} type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}
export default TeacherItem;