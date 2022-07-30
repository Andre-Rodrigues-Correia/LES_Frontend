import React from 'react';

function ReportCheckOut(props) {
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
                        <NavLink to='/'>Relatórios CheckOut</NavLink>
                    </li>
                </ul>
            </nav>
            {/* <h1>Relatório CheckOut</h1> */}
        </>
    );
}

export default ReportCheckOut;