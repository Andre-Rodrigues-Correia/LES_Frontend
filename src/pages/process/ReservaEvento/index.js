import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import api from '../../../services/api';
import './styles.css';

function ReservaEvento(props) {
    useEffect(() => {
        api.get('reservaevento').then(res => {
            setReservas(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    const [reservas, setReservas] = useState([]);

    function deleteReserva(reserva){
        api.delete(`/reservaevento/${Number(reserva)}`).then(res => {
            setReservas(reservas.filter((eventoReserva, i) => {
                if (eventoReserva.id !== reserva) return eventoReserva;
            }));
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <h1>Local Evento</h1>

            <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to='/localevento'>Locais de Eventos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/criar-localevento-reserva'>Cadastrar Reserva de Local de Evento</NavLink>
                    </li>
                    <li>
                        <NavLink to='/atualizar-localevento-reserva'>Alterar Reserva de Local de Evento</NavLink>
                    </li>
                    <li>
                        <NavLink to='/relatorio-reserva-local-evento'>Relatório de Reservas de Locais de Eventos</NavLink>
                    </li>
                </ul>
            </nav>
        
            <div className='editable'>
                <h1>Reservas de Locais de Evento</h1>

                <div className="container">
                    {
                        reservas.map((eventoReserva, i) => {
                            return <div className="data" key={i}>
                                <h3>{`Reserva de Local de Evento: ${eventoReserva.reserva}, capacidade: ${eventoReserva.capacidade}.`}</h3>
                                <button onClick={e => deleteReserva(eventoReserva.id)}>Excluir</button>
                            </div> 
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ReservaEvento;