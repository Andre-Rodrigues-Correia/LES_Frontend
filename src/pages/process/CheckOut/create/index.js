import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';

function CreateCheckOut(props) {
    const [date, setDate] = useState('');
    const [checkins, setCheckins] = useState([]);
    const [checkin, setCheckin] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/checkin').then(res => {
            setCheckins(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    function submit(e){
        e.preventDefault();

        if (checkin === -1 || date === ''){
            alert('Por favor, selecione pelo menos um checkin e uma data.');
            return;
        }

        const data = {
            dataCheckin: date,
            checkIn: checkin === -1 ? null : checkins[checkin+1]
        }


        api.post('/checkout', data).then(res => {
            navigate('/checkout');
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={e => submit(e)}>
                <h2>Novo CheckOut</h2>

                <label htmlFor="date">Data</label><br />
                <input type="datetime-local" id='date' name='date' value={date} onChange={e => setDate(e.target.value)}/>
                <br />

                <label htmlFor="checkins">Checkin em Aberto:</label><br />
                <select name="checkins" id="checkins" value={checkin} onChange={e => setCheckin(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {checkins.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Checkin: ${e.checkin.id}, Nome cliente: ${e.cliente.nome}.`}</option>
                    })}
                </select>
                <br />

                <input type="submit" />
            </form>
        </>
    );
}

export default CreateCheckOut;