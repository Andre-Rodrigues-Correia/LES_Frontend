import React from 'react';
import './styles.css';

function CadastrarGerente(props) {
    function submit(e) {
        e.preventDefault();
        console.log('Cadastrar');
    }

    return (
        <>
            <form onSubmit={e => submit(e)} method="DELETE">
                <h2>Remover Gerente</h2>
                <label htmlFor="name">Nome</label><br />
                <input type="text" name='name' /><br />
                <label htmlFor="cpf">CPF</label><br />
                <input type="text" name='cpf' /><br />
                <label htmlFor="text">Endereço</label><br />
                <input type="text" name='endereco' />
                <label htmlFor="tel">Telefone</label><br />
                <input type="tel" name='telefone' />
                <label htmlFor="cidade">Cidade</label><br />
                <select name="cidade" id="cidade">
                    <option value="maratizes">Marataízes</option>
                    <option value="cachoeiro">Cachoeiro de Itapemirim</option>
                </select>
                <br />

                <button type="submit">Remover</button>
            </form>
        </>
    );
}

export default CadastrarGerente;