import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Quarto from './pages/domain/Quarto';
import LocalEvento from './pages/domain/LocalEvento';
import ReservaEvento from './pages/process/ReservaEvento';
import CreateLocalEvento from './pages/domain/LocalEvento/create';
import UpdateLocalEvento from './pages/domain/LocalEvento/update';
import CreateLocalEventoReserva from './pages/process/ReservaEvento/create';
import UpdateLocalEventoReserva from './pages/process/ReservaEvento/update';
import Veiculo from './pages/domain/Veiculo';
import Gerente from './pages/domain/Gerente';
import Funcionarios from './pages/domain/Funcionario';
import Cliente from './pages/domain/Cliente';
import Pessoas from './pages/domain/Pessoas';
import CheckIn from './pages/process/CheckIn';
import CreateCheckIn from './pages/process/CheckIn/create';
import UpdateCheckIn from './pages/process/CheckIn/update';
import ReportCheckIn from './pages/reports/ReportCheckIn';
import CheckOut from './pages/process/CheckOut';
import CreateCheckOut from './pages/process/CheckOut/create';
import UpdateCheckOut from './pages/process/CheckOut/update';
import ReportCheckOut from './pages/reports/ReportCheckOut';
import ReportVeiculo from './pages/reports/ReportReservaVeiculo';
import ReportLocalEvento from './pages/reports/ReportReservaLocal';
import CadastrarGerente from './pages/process/Pessoas/Gerente/Cadastrar';
import AlterarGerente from './pages/process/Pessoas/Gerente/Alterar';
import RemoverGerente from './pages/process/Pessoas/Gerente/Remover';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/criar-conta' element={<CreateAccount />} />
                    <Route path='/entrar' element={<Login />} />

                    {/* Domain pages */}
                    <Route path='/quarto' element={<Quarto/>}/>
                    <Route path='/localevento' element={<LocalEvento/>}/>
                    <Route path='/criar-localevento' element={<CreateLocalEvento/>}/>
                    <Route path='/atualizar-localevento' element={<UpdateLocalEvento/>}/>
                    <Route path='/veiculo' element={<Veiculo />} />
                    <Route path='/pessoas' element={<Pessoas />} />
                    <Route path='/gerente' element={<Gerente />} />
                    <Route path='/cliente' element={<Cliente />} />
                    <Route path='/funcionario' element={<Funcionarios />} />

                    {/* Process */}
                    <Route path='/checkin' element={<CheckIn/>}/>
                    <Route path='/criar-checkin' element={<CreateCheckIn/>}/>
                    <Route path='/atualizar-checkin' element={<UpdateCheckIn/>}/>
                    <Route path='/localevento-reserva' element={<ReservaEvento/>}/>
                    <Route path='/criar-localevento-reserva' element={<CreateLocalEventoReserva/>}/>
                    <Route path='/atualizar-localevento-reserva' element={<UpdateLocalEventoReserva />} />
                    <Route path='/checkout' element={<CheckOut />} />
                    <Route path='/criar-checkout' element={<CreateCheckOut />} />
                    <Route path='/atualizar-checkout' element={<UpdateCheckOut />} />
                    <Route path='/cadastrar-gerente' element={<CadastrarGerente />} />
                    <Route path='/alterar-gerente' element={<AlterarGerente />} />
                    <Route path='/remover-gerente' element={<RemoverGerente />} />

                    {/* Report pages */}
                    <Route path='/relatorio-checkin' element={<ReportCheckIn />} />
                    <Route path='/relatorio-checkout' element={<ReportCheckOut />} />
                    <Route path='/relatorio-veiculo' element={<ReportVeiculo />} />
                    <Route path='/relatorio-reserva-local-evento' element={<ReportLocalEvento />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;