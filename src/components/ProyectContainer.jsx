import React from 'react';
import Proyect from '../UI/Proyect';
import "../styles/ProyectContainer.css"

function ProyectContainer({data, proyectos, darkMode}) {
    console.log(proyectos)
    return ( 
            <section className={`proyectContainer${darkMode}`}>
                <h3>Proyectos</h3>
                <section className={`proyectNest${darkMode}`}>
                {proyectos?proyectos.map((e)=>{
                    return (<Proyect data={e} darkMode={darkMode}area={"proyect"}key={e.id}/>)
                }):null}
                </section>
            </section>)
}

export default ProyectContainer;
