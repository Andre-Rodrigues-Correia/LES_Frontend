import React from "react";
import {Link} from 'react-router-dom';
import './styles.css';

function Header(){
    return (
        <header>
            <Link to='/'>
                <h1>Smith Palace <span>Hotel</span></h1>
            </Link>

            <ul>
                <li>
                    <Link to="/entrar">Entrar</Link>
                </li>
                <li>
                    <Link to="/criar-conta">Criar conta</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;