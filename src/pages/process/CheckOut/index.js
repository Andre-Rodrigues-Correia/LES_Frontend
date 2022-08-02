import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../../../services/api';

import './styles.css'

function CheckOut(props) {
    const [report, setReport] = useState([]);

    useEffect(() => {
        api.get('checkout').then(res => {
            setReport(formatData(res.data));
        })
            .catch(e => {
                alert(e.response.data.message);
            })
    }, [])

    function deleteCheckOut(checkout) {
        api.delete(`/checkout/${Number(checkout) + 1}`).then(res => {
            setReport(report.filter((e, i) => {
                if (i != checkout) return e;
            }));
        })
            .catch(e => {
                alert(e.response.data.message);
            })
    }

    function formatData(data) {
        return data.map(e => {
            const { reservaEvento } = e;
            const { reservaQuarto } = e;
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
                        <NavLink to='/criar-checkout'>Novo CheckOut</NavLink>
                    </li>
                    <li>
                        <NavLink to='/atualizar-checkout'>Atualizar CheckOut</NavLink>
                    </li>
                </ul>
            </nav>

            <div className='list'>
                <h1>CheckOut's</h1>

                <div className="container">
                    {
                        report.map((e, i) => {
                            return <div className="data" key={i}>
                                <h3>{e}</h3>
                                <button onClick={e => deleteCheckOut(i)}>Deletar</button>
                                <button onClick={e => deleteCheckOut(i)}>Atualizar</button>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default CheckOut;