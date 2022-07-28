import React from 'react';
import './styles.css';

function CreateAccount(props) {
    function submit(e){
        e.preventDefault();
        console.log('Login');
    }

    return (
        <>
            <form onSubmit={e => submit(e)}>
                <h2>Criar conta</h2>
                <label htmlFor="name">Nome</label><br />
                <input type="text" name='name' /><br />
                <label htmlFor="cpf">CPF</label><br />
                <input type="text" name='cpf' /><br />
                <label htmlFor="password">Senha</label><br />
                <input type="password" name='password' />
                <label htmlFor="rpassword">Repetir senha</label><br />
                <input type="password" name='rpassword' />

                <fieldset>
                    <input type="radio" name='usertype' id='gerente' value='gerente' />
                    <label htmlFor="gerente"> Gerente</label><br />
                    <input type="radio" name='usertype' id='funcionario' value='funcionario' />
                    <label htmlFor="funcionario"> Funcionário</label><br />
                    <input type="radio" name='usertype' id='cliente' value='cliente' />
                    <label htmlFor="cliente"> Cliente</label><br />
                </fieldset>

                <label htmlFor="cidade">Cidade</label><br />
                <select name="cidade" id="cidade">
                    <option value="maratizes">Marataízes</option>
                    <option value="cachoeiro">Cachoeiro de Itapemirim</option>
                </select>
                <br />

                <input type="submit" />
            </form>
        </>
    );
}

export default CreateAccount;