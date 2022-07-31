import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import {NavLink} from 'react-router-dom';
import List from '../../../components/List'

function ReportReservaVeiculo(props) {

    const [report, setReport] = useState([]);
    const [qtdUsado, setQtdUsado] = useState([])
    const [placa, setPlaca] = useState([])

    async function onSubmit(e){
        e.preventDefault();

        api.get(`/reservaveiculo/reservaveiculoquantidadevezesusado/${placa}/${qtdUsado}`).then(res => {
            setReport(formatData(res.data));
            console.log(res.data)
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }


    function formatData(data){
        return data.map(e => {
            return `Nome do veiculo: ${e.veiculo.nomeVeiculo}, Placa: ${e.veiculo.placa}`
        });
    }

    return (<>
          <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to='/'>Reserva Veiculo</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Cadastrar Veiculo</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Editar Veiculo</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Remover Veiculo</NavLink>
                    </li>
                </ul>
            </nav>

            {/* //////////////////////////////////////////////////////// */}
            <div className='inputReport'>
                <form className='reportVeiculo' onSubmit={e => onSubmit(e)}>
                    <label htmlFor="placa">Placa do Veículo</label>
                    <input type="text" id='placa' name='placa' value={placa} onChange={e => setPlaca(e.target.value)} required/>

                    <label htmlFor="qtdUsado">Quantidade de Vezes usado</label>
                    <input type='number' id='qtdUsado' name='qtdUsado' value={qtdUsado} onChange={e => setQtdUsado(e.target.value)} required/>

                    <input type="submit" />
                </form>
            </div>
           
            {/* <h1>Relatório Veiculos</h1> */}

            <List title='Relatório veículos' data={report}/>
        </>
  
    );
}

export default ReportReservaVeiculo;

 