import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import List from '../../../components/List';
import api from '../../../services/api';

function ReportReservaLocal(props) {
    const [report, setReport] = useState([]);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    // dados do local de evento
    const [locais, setLocais] = useState([]);
    const [localevento, setLocalevento] = useState(-1);

    useEffect( () => {
        api.get('/localeventos').then(res => {
            setLocais(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    function onSubmit(e){
        e.preventDefault();

        if (localevento === -1 ||
            from === '' ||
            to === ''){
            alert('Por favor, preencha os dados.')
        }

        api.get(`/reservaevento/reservaeventoporlocal/${locais[localevento].id}/${from}/${to}`).then(res => {
            console.log(res.data);
            setReport(formatReport(res.data));
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }


    function formatReport(data){
        return data.map(e => {
            return `Local de Evento: ${e.local}, capacidade: ${e.capacidade}.`
        });
    }

    return (
        <>
            <h1>Local Evento</h1>

            <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to='/criar-localevento'>Cadastrar Local de Evento</NavLink>
                    </li>
                    <li>
                        <NavLink to='/alterar-reserva-local-evento'>Alterar Reserva de Local de Evento</NavLink>
                    </li>
                    <li>
                        <NavLink to='/relatorio-reserva-local-evento'>Relatório de Reservas de Locais de Eventos</NavLink>
                    </li>
                </ul>
            </nav>

            <form className='dateForm' onSubmit={e => onSubmit(e)}>
                <label htmlFor="quartos">Reserva de Quartos</label><br />
                <select name="quartos" id="quartos" value={localevento} onChange={e => setLocalevento(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {locais.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Local de Evento: ${e.local}, capacidade: ${e.capacidade}.`}</option>
                    })}
                </select>
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

            <List title='Relatório de Reservas de Locais de Eventos por Período' data={report}/>
        </>
    );
}

export default ReportReservaLocal;