import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';

function UpdateCheckIn(props) {
    const [date, setDate] = useState('');
    const [checkIns, setCheckIns] = useState([]);
    const [checkin, setCheckIn] = useState(-1);

    const [quartos, setQuartos] = useState([]);
    const [quarto, setQuarto] = useState(-1);
    const [eventos, setEventos] = useState([]);
    const [evento, setEvento] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/checkin').then(res => {
            setCheckIns(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })

        api.get('/reservaevento').then(res => {
            setEventos(res.data)
        })
        .catch(e => {
            alert(e.response.data.message);
        })

        api.get('/reservaquarto').then(res => {
            setQuartos(res.data)
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    function submit(e){
        e.preventDefault();

        if (date === '' ||
            checkin === -1 ||
            quarto === -1 ||
            evento === -1){
            alert('Por favor, preencha os dados');
        }

        const data = {
            id: checkin+1,
            dateCheckin: date,
            reservaEvento: eventos[evento+1],
            reservaQuarto: quartos[quarto+1]
        }

        api.put('/checkin', data).then(res => {
            navigate('/checkin')
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={e => submit(e)}>
                <h2>Atualizar CheckIn</h2>

                <label htmlFor="checkins">CheckIn</label><br />
                <select name="checkins" id="checkins" value={checkin} onChange={e => setCheckIn(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {checkIns.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Codigo checkIn: ${e.id}`}</option>
                    })}
                </select>
                <br />

                <label htmlFor="date">Data</label><br />
                <input type="datetime-local" id='date' name='date' value={date} onChange={e => setDate(e.target.value)}/>
                <br />

                <label htmlFor="quartos">Reserva de Quartos</label><br />
                <select name="quartos" id="quartos" value={quarto} onChange={e => setQuarto(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {quartos.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Numero Quarto: ${e.quarto.numeroQuarto}, Nome cliente: ${e.cliente.nome}.`}</option>
                    })}
                </select>
                <br />

                <label htmlFor="eventos">Reserva de Eventos</label><br />
                <select name="eventos" id="eventos" value={evento} onChange={e => setEvento(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {eventos.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Local de Evento: ${e.localEvento.local}, Nome cliente: ${e.cliente.nome}.`}</option>
                    })}
                </select>
                <br />

                <input type="submit" />
            </form>
        </>
    );
}

export default UpdateCheckIn;