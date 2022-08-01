import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import List from '../../../components/List';
import api from '../../../services/api';

import './styles.css';

function ReportCheckOut(props) {
    const [report, setReport] = useState([]);
    const [report2, setReport2] = useState([]);
    const[id, setId] = useState([]);
    const [to, setTo] = useState('');
    // const checkin; /*chamarReserva();*/
    //  const t = [1,2];
    useEffect(() => {
        console.log('Hello')

        api.get('/checkout').then(res => {
            const { data } = res;
            setReport2(data);
        })
    }, [])

    async function onSubmit(e) {
        e.preventDefault();

         const { data } = await api.get(`/checkout`);
        setReport(formatData(data));
    }

    function formatData(data) {
        return data.map(e => {
            console.log(e);
            console.log(to);
            let dat = to.toString() + ':00'
            if (e.dataCheckout == dat && e.id == id) {
                return `ReservaQuarto: ${e.dataCheckout}, Preço final: ${e.valor}.`
            }
            
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
                        <NavLink to='/relatorio-checkout'>Relatórios CheckOut</NavLink>
                    </li>
                </ul>
            </nav>

            <form className='dateForm' onSubmit={e => onSubmit(e)}>
                <label htmlFor="id">id do Checkin:</label> <input type="number" id='id' name='id' value={id} onChange={e => setId(e.target.value)} />
                <br></br> 
                <label>Id existentes: </label> 
                {report2.map(x => {
                    return <>
                        <br />
                            <label for="id">{x.id}</label>
                    </>
                })}
                <br />
                <br />
                <label htmlFor="to">Data Saída:</label>
                <input type="datetime-local" id='to' name='to' value={to} onChange={e => setTo(e.target.value)} />

                <input type="submit" />
            </form>


            <List title='Relatório de CheckOut por id Checkin e data de saída:' data={report} />
        </>
    );
}

export default ReportCheckOut;
