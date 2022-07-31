import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

function Veiculo(props) {

    return (

        <div className='menu'>
            <ul>
                <li>Cadastrar Veículo</li>
                <li>Editar Veículo</li>
                <li>Remover Veículo</li>
                <li> <NavLink to="/relatorio-veiculo">Relátorio</NavLink></li>
            </ul>
        </div>
        
    );
}

export default Veiculo;