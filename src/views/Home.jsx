import React from 'react';
import EducationContainer from '../components/EducationContainer';
import ProyectContainer from '../components/ProyectContainer';
import "../styles/Home.css"

function Home({data, darkMode,proyectos}) {
    return (
        <section>
            <section className={`home ${darkMode}`}>
                <h1>Front End <br/> Development</h1>
            </section>
            <ProyectContainer darkMode={darkMode} proyectos={proyectos}/>
            <EducationContainer darkMode={darkMode} data={data}/>
        </section>
    )
}

export default Home;
