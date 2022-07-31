import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import api from '../../services/api';

function CreateAccount(props) {
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [rsenha, setRsenha] = useState('');
    const [cidade, setCidade] = useState(-1);
    const [tipo, setTipo] = useState('gerente');

    const [cidades, setCidades] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/cidades').then(res => {
            const {data} = res;
            setCidades(data);
        })
    }, [])
    
    async function submit(e){
        e.preventDefault();

        if (senha !== rsenha){
            alert('As senhas devem ser iguais.');
            return;
        }

        if (nome === '' ||
            login === '' ||
            cpf === '' ||
            senha === '' ||
            rsenha === '' ||
            cidade === ''){
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const data = {
            nome,
            login,
            cpf,
            senha,
            cidade: cidade == -1 ? null : cidades[cidade]
        };

        if (tipo === 'gerente'){
            await api.post('/gerentes', data).then(res => {
                // const {data} = res;
                // console.log(data);
                localStorage.setItem('login', true);
                navigate('/');
                window.location.reload();
            })
            .catch(e => {
                alert(e.response.data.message);
            });
        }

        if (tipo === 'funcionario'){
            await api.post('/funcionarios', data).then(res => {
                // const {data} = res;
                // console.log(data);
                localStorage.setItem('login', true);
                navigate('/');
                window.location.reload();
            })
            .catch(e => {
                alert(e.response.data.message);
            });
        }

        if (tipo === 'cliente'){
            await api.post('/clientes', data).then(res => {
                // const {data} = res;
                // console.log(data);
                localStorage.setItem('login', true);
                navigate('/');
                window.location.reload();
            })
            .catch(e => {
                alert(e.response.data.message);
            });
        }
    }

    return (
        <>
            <form onSubmit={e => submit(e)}>
                <h2>Criar conta</h2>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" id='nome' value={nome} onChange={e => setNome(e.target.value)}/><br />
                <label htmlFor="login">Login</label><br />
                <input type="text" id='login' value={login} onChange={e => setLogin(e.target.value)}/><br />
                <label htmlFor="cpf">CPF</label><br />
                <input type="text" id='cpf' value={cpf} onChange={e => setCpf(e.target.value)} /><br />
                <label htmlFor="password">Senha</label><br />
                <input type="password" id='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                <label htmlFor="rpassword">Repetir senha</label><br />
                <input type="password" id='rpassword' value={rsenha} onChange={e => setRsenha(e.target.value)}/>

                <fieldset onChange={e => setTipo(e.target.value)}>
                    <legend>Tipo de Usuário</legend>
                    <input type="radio" name='usertype' id='gerente' value='gerente' checked={tipo === 'gerente'} />
                    <label htmlFor="gerente"> Gerente</label><br />
                    <input type="radio" name='usertype' id='funcionario' value='funcionario' checked={tipo === 'funcionario'} />
                    <label htmlFor="funcionario"> Funcionário</label><br />
                    <input type="radio" name='usertype' id='cliente' value='cliente' checked={tipo === 'cliente'} />
                    <label htmlFor="cliente"> Cliente</label><br />
                </fieldset>

                <label htmlFor="cidade">Cidade</label><br />
                <select name="cidade" id="cidade" value={cidade} onChange={e => setCidade(e.target.value)}>
                    <option value={-1}>Selecione uma opção</option>
                    {cidades.map((e, i) => {
                        return <option value={Number(i)} key={e.id}>{e.nome}</option>
                    })}
                </select>
                <br />

                <input type="submit" />
            </form>
        </>
    );
}

export default CreateAccount;