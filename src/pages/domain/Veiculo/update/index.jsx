import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';
// import './styles.css';

function UpdateVeiculo(props) {
    const [nome, setNome] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [placa, setPlaca] = useState('');

    // Dados de Veiculos
    const [veiculos, setVeiculos] = useState([]);
    const [veiculo, setVeiculo] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/veiculo').then(res => {
            setVeiculos(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])

    function onSubmit(e){
        e.preventDefault();
        
        if (nome === '' || placa === -1){
            alert('Por favor, informe os dados.');
        }

         const data = {
            nomeVeiculo: nome,
            placa: placa, 
            statusVeiculo: disponivel,
        };

        api.put(`veiculo/${veiculos[veiculo].id}`, data).then(res => {
            navigate('/veiculo');
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <h2>Atualizar Veiculo</h2>

                <select name="quartos" id="quartos" value={veiculo} onChange={e => setVeiculo(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {veiculos.map((e, i) => {
                        return <option value={i} key={e.id}>{`Veiculo: ${e.nomeVeiculo}, placa: ${e.placa}.`}</option>
                    })}
                </select>
                <br />

                <label htmlFor="nome">Nome do veículo</label><br />
                <input type="text" id='nome' value={nome} onChange={e => setNome(e.target.value)}/><br />

                <label htmlFor="placa">Placa</label><br />
                <input type="text" id='placa' value={placa} onChange={e => setPlaca(e.target.value)}/><br />

                <fieldset>
                    <legend>Disponibilidade do Veiculo</legend>
                    <input type="radio" name='nao' id='nao' checked={!disponivel} onChange={e => setDisponivel(false)} />
                    <label htmlFor="nao"> Disponível</label><br />
                    <input type="radio" name='sim' id='sim' checked={disponivel} onChange={e => setDisponivel(true)}/>
                    <label htmlFor="sim"> Indisponível</label><br />
                </fieldset>

                <input type="submit"/>
            </form>
        </>
    );
}

export default UpdateVeiculo;