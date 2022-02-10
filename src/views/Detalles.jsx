import React,{useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/Detalles.css'
import ArrowButton from '../UI/ArrowButton'
import UserFirebase from '../hooks/UserFirebase'

function Detalles({darkMode,data}) {
    const {proyecto,fetchGetIndividualProyect}=UserFirebase()
    let identi= useParams().id
    console.log(identi)
    
    useEffect(()=>{
        fetchGetIndividualProyect(identi)
      //eslint-disable-next-line
    },[]) 
    console.log(proyecto)


    return (
    <section className={`mainDetalles${darkMode}`}>
        {proyecto?
        <section className={`detalles${darkMode}`}>
            
            <h3 className="nombre">{proyecto.nombre}</h3>

            <section className={`conjunto`}>
                <img src="https://www.howtogeek.com/wp-content/uploads/2010/03/image5.png?trim=1,1&bg-color=000&pad=1,1" alt="a" />
                <section className='descripcion'>
                    <p>{proyecto.descripcion}</p>
                    {proyecto.tecnologias?
                        <section className={`tecnologias`}>{proyecto.tecnologias.map((e)=>{
                            return <span className={`tecno${darkMode}`}>{e}</span>
                        })}</section>: null
                    }
                    <a href={`http://${proyecto.link}`}target="blank"><ArrowButton darkMode={darkMode}/></a>
                </section>
            </section>
        </section>:
        <section>
            <h2>Cargando...</h2>
        </section>
        
    }
    </section>
    )
}

export default Detalles