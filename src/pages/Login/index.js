import React from 'react';

import './styles.css';

function Login(props) {
    function submit(e){
        e.preventDefault();
        console.log('Login');
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