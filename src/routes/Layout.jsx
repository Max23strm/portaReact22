import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Social from '../components/Social';

function Layout({darkMode,setDarkMode}) {
    return <>
        <NavBar setDarkMode={setDarkMode} darkMode={darkMode}/>
        <Outlet/>
        <Social/>
    </>;
}

export default Layout;
