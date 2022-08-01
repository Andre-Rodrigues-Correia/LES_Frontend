import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';
// import './styles.css';

function UpdateLocalEvento(props) {
    const [nome, setNome] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [capacidade, setCapacidade] = useState(1);

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
        
        if (nome === '' || local === -1){
            alert('Por favor, informe os dados.');
        }

        const data = {
            local: nome,
            status: disponivel,
            capacidade
        };

        api.put(`localeventos/${locais[local].id}`, data).then(res => {
            navigate('/');
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <h2>Atualizar Local de Evento</h2>

                <select name="quartos" id="quartos" value={local} onChange={e => setLocal(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {locais.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{`Local de Evento: ${e.local}, capacidade: ${e.capacidade}.`}</option>
                    })}
                </select>
                <br />

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

export default UpdateLocalEvento;