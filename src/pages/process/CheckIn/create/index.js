import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';

function CreateCheckIn(props) {
    const [date, setDate] = useState('');
    const [eventos, setEventos] = useState([]);
    const [quartos, setQuartos] = useState([]);

    const [quarto, setQuarto] = useState(-1);
    const [evento, setEvento] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/reservaquarto').then(res => {
            setQuartos(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })

        api.get('/reservaevento').then(res => {
            setEventos(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    function submit(e){
        e.preventDefault();

        if (quarto === -1 || evento === -1 || date === ''){
            alert('Por favor, selecione pelo menos um local de evento e uma data.');
            return;
        }

        const data = {
            dataCheckin: date,
            reservaQuarto: quarto === -1 ? null : quartos[quarto+1],
            reservaEvento: evento === -1 ? null : eventos[evento+1]
        }


        api.post('/checkin', data).then(res => {
            navigate('/checkin');
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={e => submit(e)}>
                <h2>Novo CheckIn</h2>

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

export default CreateCheckIn;