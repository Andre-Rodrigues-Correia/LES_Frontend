import React from 'react';
import { Route, BrowserRouter,  Routes} from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/criar-conta' element={<CreateAccount/>}/>
                    <Route path='/entrar' element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;