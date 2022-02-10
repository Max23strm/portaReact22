import React from 'react';
import Proyect from '../UI/Proyect';
import "../styles/ProyectContainer.css"

function EducationContainer({data, darkMode}) {
    return (
        <section className={`educationContainer${darkMode}`}>
            <h3>Cursos y certificaciones</h3>
            <section className={`educationNest${darkMode}`}>
                {data.educacion.map((e)=>{
                    return (<Proyect data={e} darkMode={darkMode}area={"education"}key={e.id}/>)

                })}
            </section>
        </section>
    )
}

export default EducationContainer;
