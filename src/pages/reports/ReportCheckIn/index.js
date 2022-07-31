import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import List from '../../../components/List';
import api from '../../../services/api';

import './styles.css';

function ReportCheckIn(props) {
    const [report, setReport] = useState([]);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    useEffect( () => {
        console.log('Hello')
    }, [])

    async function onSubmit(e){
        e.preventDefault();

        const {data} = await api.get(`/checkin/listar/${from}/${to}`);
        setReport(formatData(data));
    }

    function formatData(data) {
        return data.map(e => {
            const {reservaEvento} = e;
            const {reservaQuarto} = e;
            if (reservaEvento != null && reservaQuarto != null)
                return `ReservaEvento: ${reservaEvento.cliente.nome}, ${reservaEvento.localEvento.local}. ReservaQuarto: ${reservaQuarto.cliente.nome}, Nº ${reservaQuarto.quarto.numeroQuarto}.`
            
            if (reservaEvento == null)
                return `ReservaQuarto: ${reservaQuarto.cliente.nome}, Nº ${reservaQuarto.quarto.numeroQuarto}.`
            
            if (reservaQuarto == null)
                return `ReservaEvento: ${reservaEvento.cliente.nome}, ${reservaEvento.localEvento.local}.`
        });
    }

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

            <form className='dateForm' onSubmit={e => onSubmit(e)}>
                <label htmlFor="from">De</label>
                <input type="datetime-local" id='from' name='from' value={from} onChange={e => setFrom(e.target.value)}/>

                <label htmlFor="to">Para</label>
                <input type="datetime-local" id='to' name='to' value={to} onChange={e => setTo(e.target.value)}/>

                <input type="submit" />
            </form>

            {/* <h1>Relatório CheckIn</h1> */}

            <List title='Relatório de CheckIn por Período' data={report}/>
        </>
    );
}

export default ReportCheckIn;