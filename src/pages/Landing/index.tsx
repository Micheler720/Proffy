import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logoffIcon from '../../assets/images/icons/logoff.svg';
import './style.css';
import api from '../../services/api';

function Landing (){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=>{
        api.get('connections').then(response =>{
            const { total } = response.data;
            setTotalConnections(total);
         })
    }, []);
    return(
            <div id='page-landing'>                
                <div id='page-landing-content' >
                    <div id='page-landing-user'>
                        <span className='user-name'>
                            <Link
                            to="profile"
                            >
                                <img 
                                className="user-avatar"
                                src="https://scontent.fcnf2-1.fna.fbcdn.net/v/t1.0-9/81590492_2954950311215302_6703958244089397248_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeHSxZiuUv6h1TNUazI6Z7D8a1Vp0x5uc49rVWnTHm5zj6_5VNyz5YSYVnlATkntUqXX2WBpw0g1jTVu-7TTfFIV&_nc_ohc=J6JXIPFqV40AX8Gv70C&_nc_ht=scontent.fcnf2-1.fna&oh=bca6d9889ea41a853ac5b19f61ffcb45&oe=5F54DC27" 
                                alt="Avatar"
                                />
                                Michele de Freitas Ribeiro
                            </Link>
                        </span>
                        <button className='button-logoff'>
                            <img 
                            src={logoffIcon}
                            alt= "Logoff"
                            />
                        </button>
                    </div>
                    <div id= 'page-lading-logo' >
                        <div className="logo-container">
                            <img src={logoImg} alt=''/>
                            <h2>Sua plataforma de estudos online.</h2>
                        </div>
                        <img 
                            className='hero-image' 
                            src={landingImg}
                            alt='Plataforma de estudos' 
                        />                   
                    </div>
                </div>
                <footer id="page-landing-footer">
                    <div className='footer-content'>
                        <span>
                            Seja bem-vindo. <br />
                            <strong>O que deseja fazer?</strong>
                        </span>
                        <span className="total-connection">
                            Total de {totalConnections} conexões
                            <img src={purpleHeartIcon} alt="Coração Roxo" />
                        </span>
                    </div>    
                    <div className="buttons-container">
                        <Link to="/study" className='study'>
                            <img src={studyIcon} alt='Estudar' />
                            Estudar    
                        </Link> 
                        <Link to="/give-classes" className='give-classes'>
                            <img src={giveClassesIcon} alt='Dar Aula' />
                            Dar Aula   
                        </Link> 
                    </div>  
                </footer>
            </div>
    );
}
export default Landing;