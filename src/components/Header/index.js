import React from "react";
import {NavLink} from 'react-router-dom';
import './styles.css';

function Header(){
    return (
        <header>
            <NavLink to='/'>
                <h1>Smith Palace <span>Hotel</span></h1>
            </NavLink>

            <ul>
                <li>
                    <NavLink to="/entrar">Entrar</NavLink>
                </li>
                <li>
                    <NavLink to="/criar-conta">Criar conta</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;