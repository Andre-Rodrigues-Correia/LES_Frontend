import React from 'react';
import {NavLink} from 'react-router-dom';
import EditableList from '../../../components/EditableList';

function LocalEvento(props) {
    let data = [
        {info: 'Informacao', id: 0}
    ];
    
    return (
        <>
            <h1>Local Evento</h1>

            <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to='/cadastrar-reserva-local-evento'>Cadastrar Reserva de Local de Evento</NavLink>
                    </li>
                    <li>
                        <NavLink to='/alterar-reserva-local-evento'>Alterar Reserva de Local de Evento</NavLink>
                    </li>
                    <li>
                        <NavLink to='/remover-reserva-local-evento'>Remover Reserva de Local de Evento</NavLink>
                    </li>
                    <li>
                        <NavLink to='/relatorio-reserva-local-evento'>Relatório de Reservas de Locais de Eventos</NavLink>
                    </li>
                </ul>
            </nav>
        
            <EditableList title='Local Evento' data={data}/>
        </>
    );
}

export default LocalEvento;