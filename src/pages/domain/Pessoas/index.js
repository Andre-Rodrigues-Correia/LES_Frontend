import React from "react";
import { NavLink } from 'react-router-dom';
import './styles.css';

function Gerente() {
    return (
        <>
            <div id="Pessoas">
                <NavLink to='/'>

                </NavLink>

                <ul>
                    <li>
                        <NavLink to="/cliente">Cliente</NavLink>
                    </li>
                    <li>
                        <NavLink to="/funcionario">Funcionário</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gerente">Gerente</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Gerente;