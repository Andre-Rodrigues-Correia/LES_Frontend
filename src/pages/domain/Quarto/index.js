import React from 'react';
import {NavLink} from 'react-router-dom';
import EditableList from '../../../components/EditableList';

function Quarto(props) {
    let data = [
        {info: 'Informacao', id: 0}
    ];
    return (
        <>
            <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to='/'>Reserva Quarto</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>CheckIn</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>CheckOut</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Relatórios Reserva Quarto</NavLink>
                    </li>
                    <li>
                        <NavLink to='/relatorio-checkin'>Relatórios CheckIn</NavLink>
                    </li>
                    <li>
                        <NavLink to='/relatorio-checkout'>Relatórios CheckOut</NavLink>
                    </li>
                </ul>
            </nav>
            

            {/* <EditableList title='Quartos' data={data}/> */}
        </>
    );
}

export default Quarto;