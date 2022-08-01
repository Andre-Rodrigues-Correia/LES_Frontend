import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';

function UpdateCheckOut(props) {
    const [date, setDate] = useState('');
    const [checkOuts, setCheckOuts] = useState([]);
    const [checkout, setCheckOut] = useState(-1);

    const [checkins, setCheckins] = useState([]);
    const [checkin, setCheckin] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/checkout').then(res => {
            setCheckOuts(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })

        api.get('/checkin').then(res => {
            setCheckins(res.data)
        })
        .catch(e => {
            alert(e.response.data.message);
        })

    }, [])

    function submit(e){
        e.preventDefault();

        if (date === '' ||
            checkout === -1 ||
            checkin === -1){
            alert('Por favor, preencha os dados');
        }

        const data = {
            id: checkout+1,
            dateCheckout: date,
            checkIn: checkins[checkin+1],
        }

        api.put('/checkout', data).then(res => {
            navigate('/checkout')
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={e => submit(e)}>
                <h2>Atualizar CheckOut</h2>

                <label htmlFor="checkouts">CheckOut</label><br />
                <select name="checkouts" id="checkouts" value={checkout} onChange={e => setCheckOut(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {checkOuts.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Codigo checkOut: ${e.id}`}</option>
                    })}
                </select>
                <br />

                <label htmlFor="date">Data</label><br />
                <input type="datetime-local" id='date' name='date' value={date} onChange={e => setDate(e.target.value)}/>
                <br />

                <label htmlFor="checkins">Checkins em Aberto</label><br />
                <select name="checkins" id="checkins" value={checkin} onChange={e => setCheckin(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {checkins.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Checkins em Aberto: ${e.checkin.id}, Nome cliente: ${e.cliente.nome}.`}</option>
                    })}
                </select>
                <br />

                <input type="submit" />
            </form>
        </>
    );
}

export default UpdateCheckOut;