import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';


interface PageHeaderProfileProps {
    name: string;
    subject?: string;
    profile?: boolean;
}

const PageHeaderProfile: React.FC<PageHeaderProfileProps> =  (props) => {
    return(
            <header className="page-header-profile">
                <div className="top-bar-container">
                    <Link to="/"> 
                    <img src={backIcon} alt="Logo" />
                    </Link>
                    <span>Meu Perfil</span>
                    <img src={logoImg} alt="Logo" />
                </div>
                <header className='header-content'>
                    <img 
                    src="https://scontent.fcnf2-1.fna.fbcdn.net/v/t1.0-9/81590492_2954950311215302_6703958244089397248_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeHSxZiuUv6h1TNUazI6Z7D8a1Vp0x5uc49rVWnTHm5zj6_5VNyz5YSYVnlATkntUqXX2WBpw0g1jTVu-7TTfFIV&_nc_ohc=J6JXIPFqV40AX8Gv70C&_nc_ht=scontent.fcnf2-1.fna&oh=bca6d9889ea41a853ac5b19f61ffcb45&oe=5F54DC27" 
                    alt="Avatar" 
                    />
                    <strong>{props.name}</strong>
                    {props.subject && <p>{props.subject}</p>}
                    {props.children}
                </header>
            </header>
    );
}
export default PageHeaderProfile;