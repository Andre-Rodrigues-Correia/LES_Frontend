import React from 'react';
import {useNavigate} from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();
        localStorage.setItem('login', true);
        navigate('/');
        window.location.reload();
    }

    return (
        <>
            <form onSubmit={e => submit(e)}>
                <h2>Entrar</h2>
                <label htmlFor="cpf">CPF</label><br />
                <input type="text" name='cpf' /><br />
                <label htmlFor="password">Senha</label><br />
                <input type="password" name='password' />

                <fieldset>
                    <legend>Tipo de Usuário</legend>
                    <input type="radio" name='usertype' id='gerente' value='gerente' />
                    <label htmlFor="gerente"> Gerente</label><br />
                    <input type="radio" name='usertype' id='funcionario' value='funcionario' />
                    <label htmlFor="funcionario"> Funcionário</label><br />
                    <input type="radio" name='usertype' id='cliente' value='cliente' />
                    <label htmlFor="cliente"> Cliente</label><br />
                </fieldset>

                <input type="submit" />
            </form>
        </>  
    );
}

export default Login;