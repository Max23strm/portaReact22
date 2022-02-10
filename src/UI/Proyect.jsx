import React from 'react';
import '../styles/Proyect.css'
import ArrowButton from './ArrowButton';
import { Link } from 'react-router-dom';

function Proyect({area,data,darkMode}) {
    return (
        <section className={`${area}View${darkMode}`}>
            {data?
            <section className={`${area}Detalles${darkMode}`}>
                <h2>{data.nombre}</h2>
                {data.tipo?<h4>{data.tipo}</h4>:null}
                {data.tecnologias?
                <section className={`${area}Tecno${darkMode}`}>
                    {data.tecnologias.map((e)=>{
                        return <p key={e}>{e}</p>})}
                </section>:
                data.cursos?<section>
                    {data.cursos.map((e)=>{
                        return (<section key={e.nombre}  className={`cursosProyect${darkMode}`}>
                        
                            <h5 className={`nombreCurso${darkMode}`}>{e.nombre}</h5>
                            {e.final==="Actualidad"?
                            <p className={`enCurso${darkMode}`}>En curso</p>:
                            <p className={`cursoFinalizado${darkMode}`}>Finalizado</p>}
                        </section>)
                    })}
                </section>:
                null}
                <Link to={`/proyecto${data.id}`}>
                    <ArrowButton darkMode={darkMode}area={area}/>
                </Link>
            </section>:null}
        </section>)
}

export default Proyect;
