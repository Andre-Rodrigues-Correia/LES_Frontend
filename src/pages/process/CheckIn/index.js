import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import api from '../../../services/api';

import './styles.css'

function CheckIn(props) {
    const [report, setReport] = useState([]);

    useEffect(() => {
        api.get('checkin').then(res => {
            setReport(formatData(res.data));
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    function deleteCheckIn(checkin){
        api.delete(`/checkin/${Number(checkin)+1}`).then(res => {
            setReport(report.filter((e, i) => {
                if (i != checkin) return e;
            }));
        })
        .catch(e => {
            alert(e.response.data.message);
        })
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
                        <NavLink to='/criar-checkin'>Novo CheckIn</NavLink>
                    </li>
                    <li>
                        <NavLink to='/atualizar-checkin'>Atualizar CheckIn</NavLink>
                    </li>
                </ul>
            </nav>

            <div className='list'>
                <h1>CheckIn's</h1>

                <div className="container">
                    {
                        report.map((e, i) => {
                            return <div className="data" key={i}>
                                <h3>{e}</h3>
                                <button onClick={e => deleteCheckIn(i)}>Deletar</button>
                            </div> 
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default CheckIn;