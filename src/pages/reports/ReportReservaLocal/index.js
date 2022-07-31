import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import List from '../../../components/List';
import api from '../../../services/api';

function ReportReservaLocal(props) {
    const [report, setReport] = useState([]);
    const [idLocal, setIdLocal] = useState([]);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    useEffect( () => {
        console.log('Hello')
    }, [])

    async function onSubmit(e){
        e.preventDefault();

        const {data} = await api(true).get(`/localEventoes`);
        setReport(formatData(data));
    }


    function formatData(data){
        return data.map(e => {
            if(true){
                console.log('OK');
            }
        });
    }

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

            <form className='dateForm' onSubmit={e => onSubmit(e)}>
                <label htmlFor="idLocal">ID</label>
                <input type="number" id='idLocal' name='idLocal' value={idLocal} onChange={e => setIdLocal(e.target.value)}/>
                <br />
                <label htmlFor="from">De</label>
                <input type="datetime-local" id='from' name='from' value={from} onChange={e => setFrom(e.target.value)}/>
                <br />
                <label htmlFor="to">Para</label>
                <input type="datetime-local" id='to' name='to' value={to} onChange={e => setTo(e.target.value)}/>
                <br />
                <input type="submit" />
            </form>

            {/* <h1>Relatório Local de Evento</h1> */}

            {/* <List title='Relatório de Reservas de Locais de Eventos por Período' data={report}/> */}
        </>
    );
}

export default ReportReservaLocal;