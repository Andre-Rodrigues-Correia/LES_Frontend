import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import {NavLink} from 'react-router-dom';
import List from '../../../components/List'
import './styles.css';

function ReportReservaVeiculo(props) {

    const [report, setReport] = useState([]);
    const [qtdUsado, setQtdUsado] = useState([])
    const [placa, setPlaca] = useState([])

    async function onSubmit(e){
        e.preventDefault();


        api.get(`veiculo`).then(res => {
            setReport(formatData(res.data));
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }


    function formatData(data){
        return data.map(e => {
             if(e.quantidadeVezesUsado == qtdUsado){
                return `Nome do veiculo: ${e.nomeVeiculo}, Placa: ${e.placa}`
             }else{
                
             }
            
        });
    }

    return (<>

                    <nav className='navigator'>
                        <ul>
                            <li>
                                    <NavLink to='/criar-reserva-veiculo'>Cadastrar Reserva Veiculo</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/atualizar-reserva-veiculo'>Atualizar Reserva Veículo</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/criar-veiculo'>Cadastrar Veículo</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/atualizar-veiculo'>Atualizar</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/relatorio-veiculo'>Relatório Veiculo</NavLink>
                                </li>
                        </ul>
                    </nav> 
            {/* //////////////////////////////////////////////////////// */}

                <form className='dateForm' onSubmit={e => onSubmit(e)}>
                    <label htmlFor="placa">Placa do Veículo</label>
                    <input type="text" id='placa' name='placa' value={placa} onChange={e => setPlaca(e.target.value)} required/>

                    <label htmlFor="qtdUsado">Quantidade de Vezes usado</label>
                    <input type='number' id='qtdUsado' name='qtdUsado' value={qtdUsado} onChange={e => setQtdUsado(e.target.value)} required/>

                    <input type="submit" />
                </form>
           
            {/* <h1>Relatório Veiculos</h1> */}

            <List title='Relatório veículos' data={report}/>
        </>
  
    );
}

export default ReportReservaVeiculo;

 