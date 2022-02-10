import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detalles from '../views/Detalles';
import Home from '../views/Home';
import Layout from './Layout';

function NavRoutes({data,proyectos,darkMode,setDarkMode}) {
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}/>}>
                        <Route path="/" element={<Home data={data} proyectos={proyectos} darkMode={darkMode}/>}/>
                        <Route path="/proyecto:id" data={data}  element={<Detalles data={data.proyectos} darkMode={darkMode}/>}/>
                        <Route path="/plataforma:id" data={data} darkMode={darkMode}/>
                        <Route path="*"/>
                    </Route>    
                </Routes>
            </BrowserRouter>
        )
}

export default NavRoutes;
