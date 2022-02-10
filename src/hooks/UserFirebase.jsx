import React, {useEffect, useState} from 'react'
import db from '../service'
import{ collection, getDocs, getDoc, doc} from "firebase/firestore"

function UserFirebase() {
const [proyectos, setProyectos]=useState([]);
const [proyecto, setProyecto]=useState([])

const fetchGetDataCollection=async()=>{
    try{
        const data=collection(db,"proyectos");
        const col=await getDocs(data)
        const response= col.docs.map(doc=>(
            ({id:doc.id, ...doc.data()}))
            )
            setProyectos(response)
    } catch(error){
        console.log(error)
    }
}

  //BUSCA UN ELEMENTO POR ID
    const fetchGetIndividualProyect= async (id)=>{
        try{
            const document= doc(db,"proyectos",id)
            const response= await getDoc(document)
            let result=response.data()
            setProyecto({id:response.id,...result})
        }
        catch (error){
            console.log(error)
        }
}


    return {
        proyectos,
        proyecto,
        fetchGetDataCollection,
        fetchGetIndividualProyect
    }
    
}

export default UserFirebase