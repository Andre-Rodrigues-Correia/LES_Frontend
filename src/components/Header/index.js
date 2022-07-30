import React from "react";
import {NavLink, Link} from 'react-router-dom';
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
            <nav>
                <ul>
                    <li>
                        <NavLink to='/quarto'>Quartos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/veiculo'>Veículos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/localevento'>Locais de Eventos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;