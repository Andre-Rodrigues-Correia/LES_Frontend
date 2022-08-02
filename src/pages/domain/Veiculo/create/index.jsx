import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';

function CreateVeiculo(props) {
    const [nome, setNome] = useState('');
    const [placaVeiculo, setPlacaVeiculo] = useState('')
    const [disponivel, setDisponivel] = useState(false);

    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
      
        const data = {
            nomeVeiculo: nome,
            placa: placaVeiculo, 
            statusVeiculo: disponivel,
        };

        api.post('veiculo', data).then(res => {
            navigate('/veiculo');
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <h2>Cadastrar Veiculo</h2>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" id='nome' value={nome} onChange={e => setNome(e.target.value)} required/><br />

                <label htmlFor="placa">Placa do veículo</label><br />
                <input type="text" id='placa' value={placaVeiculo} onChange={e => setPlacaVeiculo(e.target.value)} required/><br />
                <fieldset>
                    <legend>Disponibilidade do Veículo</legend>
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

export default CreateVeiculo;