import React from 'react';
import { Route, BrowserRouter,  Routes} from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Quarto from './pages/domain/Quarto';
import LocalEvento from './pages/domain/LocalEvento';
import Veiculo from './pages/domain/Veiculo';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/criar-conta' element={<CreateAccount/>}/>
                    <Route path='/entrar' element={<Login/>}/>

                    {/* Domain pages */}
                    <Route path='/quarto' element={<Quarto/>}/>
                    <Route path='/localevento' element={<LocalEvento/>}/>
                    <Route path='/veiculo' element={<Veiculo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;