import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';
import './styles.css';

function CreateLocalEventoReserva(props) {
    const [qtdPessoas, setQtdPessoas] = useState(1);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    // Dados de locais de evento
    const [locais, setLocais] = useState([]);
    const [local, setLocal] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/localeventos').then(res => {
            setLocais(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    function onSubmit(e){
        e.preventDefault();

        const data = {
            qtdPessoas
        };

        api.post('localeventos', data).then(res => {
            navigate('/');
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <h2>Cadastrar Reserva de Local de Evento</h2>

                <select name="quartos" id="quartos" value={local} onChange={e => setLocal(e.target.value)}>
                    <option value={-1}>Selecione um Local</option>
                    {locais.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Local de Evento: ${e.local}, capacidade: ${e.capacidade}.`}</option>
                    })}
                </select>
                <br />

                <select name="clientes" id="clientes" value={local} onChange={e => setLocal(e.target.value)}>
                    <option value={-1}>Selecione um Cliente</option>
                    {locais.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Local de Evento: ${e.local}, capacidade: ${e.capacidade}.`}</option>
                    })}
                </select>
                <br />

                <label htmlFor="qtdPessoas">Quantidade de Pessoas</label><br />
                <input type="number" id='qtdPessoas' value={qtdPessoas} onChange={e => setQtdPessoas(Number(e.target.value) > 0 ? Number(e.target.value) : 1)}/><br /><br />

                <label htmlFor="from">De </label>
                <input type="datetime-local" id='from' name='from' value={from} onChange={e => setFrom(e.target.value)}/>
                <label htmlFor="to"> A </label>
                <input type="datetime-local" id='to' name='to' value={to} onChange={e => setTo(e.target.value)}/>
                <br />

                <input type="submit"/>
            </form>
        </>
    );
}

export default CreateLocalEventoReserva;