import logoImg from '../assets/images/moplan.svg';
import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom'
import { NameLogged } from './NameLogged';
import '../styles/header-component.scss';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function HeaderComponent(props: ButtonProps){
    return(
        <header className="header-bar">
                <div className="content">
                    <img src={logoImg} alt="Moplan Plataform"/>
                    <div className="navBar">
                        <nav>
                            <ul>
                                <li><Link to="/">Banca de Leads</Link></li>
                            </ul>
                        </nav>

                        <div>
                            <NameLogged />
                        </div>


                    </div>
                    
                </div>
            </header>
    );
}