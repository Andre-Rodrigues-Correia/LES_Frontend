import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import api from '../../../services/api';
import './styles.css';

function ReservaEvento(props) {
    useEffect(() => {
        api.get('localeventos').then(res => {
            setLocais(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    const [locais, setLocais] = useState([]);

    function deleteLocal(local){
        api.delete(`/localeventos/${Number(local)}`).then(res => {
            setLocais(locais.filter((evento, i) => {
                if (evento.id !== local) return evento;
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
                <h1>Locais de Evento</h1>

                <div className="container">
                    {
                        locais.map((evento, i) => {
                            return <div className="data" key={i}>
                                <h3>{`Local de Evento: ${evento.local}, capacidade: ${evento.capacidade}.`}</h3>
                                <button onClick={e => deleteLocal(evento.id)}>Excluir</button>
                            </div> 
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ReservaEvento;