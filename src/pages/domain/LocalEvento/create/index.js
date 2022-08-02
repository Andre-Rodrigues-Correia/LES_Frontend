import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';
import './styles.css';

function CreateLocalEvento(props) {
    const [nome, setNome] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [capacidade, setCapacidade] = useState(1);

    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        
        if (nome === ''){
            alert('Por favor, informe o nome.');
        }

        const data = {
            local: nome,
            status: disponivel,
            capacidade
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
                <h2>Cadastrar Local de Evento</h2>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" id='nome' value={nome} onChange={e => setNome(e.target.value)}/><br />

                <label htmlFor="capacidade">Capacidade</label><br />
                <input type="number" id='capacidade' value={capacidade} onChange={e => setCapacidade(Number(e.target.value) > 0 ? Number(e.target.value) : 1)}/><br />

                <fieldset>
                    <legend>Disponibilidade do Local de Evento</legend>
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

export default CreateLocalEvento;