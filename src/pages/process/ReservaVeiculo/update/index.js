import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';

function ReservaVeiculo(props) {
    const [date, setDate] = useState('');
    const [veiculos, setVeiculos] = useState([]);
    const [quartos, setQuartos] = useState([]);

    const [quarto, setQuarto] = useState(-1);
    const [veiculo, setVeiculo] = useState(-1);

    const navigate = useNavigate();

    // useEffect(() => {
    //     api.get('/reservaquarto').then(res => {
    //         setQuartos(res.data);
    //     })
    //     .catch(e => {
    //         alert(e.response.data.message);
    //     })

    //     api.get('/reservaveiculo').then(res => {
    //         setVeiculos(res.data);
    //     })
    //     .catch(e => {
    //         alert(e.response.data.message);
    //     })
    // }, [])

    function submit(e){
        e.preventDefault();

        if (quarto === -1 || veiculo === -1 || date === ''){
            alert('Por favor, selecione pelo menos um veiculo e uma data.');
            return;
        }

        const data = {
            dataCheckin: date,
            reservaQuarto: quarto === -1 ? null : quartos[quarto+1],
            reservaVeiculo: veiculo === -1 ? null : veiculos[veiculo+1]
        }


        api.post('/veiculo', data).then(res => {
            navigate('/veiculo');
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }
    return (
       <>
             <form onSubmit={e => submit(e)}>
                <h2>Nova reserva de veículo</h2>

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

                <label htmlFor="veiculo">Reserva de Veiculos</label><br />
                <select name="veiculo" id="veiculo" value={veiculo} onChange={e => setVeiculo(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {veiculos.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Local de veiculo: ${e.veiculo.placa}, Nome cliente: ${e.cliente.nome}.`}</option>
                    })}
                </select>
                <br />

                <input type="submit" />
            </form>
       
       </>
    );
}

export default ReservaVeiculo;