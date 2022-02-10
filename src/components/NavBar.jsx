import { isFocusable } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css"
import ToggleDark from '../UI/ToggleDark';


function NavBar({darkMode,setDarkMode}) {

    
    //MOSTRAR U OCULTAR NAVBAR
    const [claseDeNav, setClaseDeNav]=useState("")
    let scrollGuardado=0
    
    const scrollear=()=>{
        const scrollActual=window.scrollY

        if (scrollActual>scrollGuardado && claseDeNav!=="scroll-down"){
            setClaseDeNav("scroll-down")
        } else if (scrollActual<scrollGuardado && claseDeNav==="scroll-down"){

            setClaseDeNav("scroll-up")
        }
        scrollGuardado=scrollActual;
    }
    
    //MEJORA UN POCO EL RENDIMIENTO DEL SCROLL
    function throttle (scrollear, limite) {
        let wait = false;                  
        return function () {              
            if (!wait) {                  
                scrollear.call();           
                wait = true;               
                setTimeout(function () {   
                    wait = false;          
                }, limite);
            }
        }
    }
    
    window.addEventListener("scroll", throttle(scrollear, 100));


    return <header className={`${claseDeNav}`}>
        <Link to={"/"} className='marca'><h3>Max Ovejak</h3></Link>
        <section className='navegacion'>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/"}>Proyecto</Link>
            <ToggleDark setDarkMode={setDarkMode}/>
        </section>
    </header>;
}

export default NavBar