import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> =  (props) => {
    return(
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/"> 
                    <img src={backIcon} alt="Logo" />
                    </Link>
                    <img src={logoImg} alt="Logo" />
                </div>
                <header className="header-content">
                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>}
                    {props.children}
                </header>
            </header>
    );
}
export default PageHeader;