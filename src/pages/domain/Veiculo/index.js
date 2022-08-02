import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import EditableList from '../../../components/EditableList';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';

function Veiculo(props) {

    // const [veiculos, setVeiculos] = useState([]);

    // useEffect(()=>{
    //         api.get(`/veiculo`).then(res => {
    //             setVeiculos(formatData(res.data));
    //             console.log(res.data)
    //         })
    //         .catch(e => {
    //             alert(e.response.data.message);
    //         })
    //     }
    // ,[]);

    // function formatData(data){
    //     return data.map(e => {
    //         console.log(e)
    //         return `Nome do veiculo: ${e.nomeVeiculo}, Placa: ${e.placa}`
    //     });
    // }

    const [veiculos, setVeiculos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('veiculo').then(res => {
            setVeiculos(res.data);
        })
        .catch(e => {
            alert(e.response.data.message);
        })
    }, [])


    function deleteVeiculo(veiculo){
        api.delete(`/veiculo/${Number(veiculo)}`).then(res => {
            alert('veiculo excluido')
            setVeiculos(veiculos.filter((veiculo, i) => {
                if (veiculo.id != veiculo) return veiculo;
            }));       
        })
        .catch(e => {
            alert(e.response.data.message);
        })

        
    }
    return (

        <>
             <h1>Local Evento</h1>

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

                    <div className='editable'>
                <h1>Veiculos</h1>

                <div className="container">
                    {
                        veiculos.map((veiculo, i) => {
                            return <div className="data" key={i}>
                                <h3>{`Veiculo: ${veiculo.nomeVeiculo}, Placa: ${veiculo.placa}.`}</h3>
                                <button onClick={e => deleteVeiculo(veiculo.id)}>Deletar</button>
                            </div> 
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Veiculo;