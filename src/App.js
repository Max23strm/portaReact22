import './App.css';
import NavRoutes from './routes/NavRoutes';
import data from './context/info.json'
import { useEffect, useState } from 'react';
import UserFirebase from './hooks/UserFirebase';

function App() {
  const {proyectos,fetchGetDataCollection}=UserFirebase()
  const [darkMode, setDarkMode]= useState("")
  
  useEffect(()=>{
    fetchGetDataCollection()
    //eslint-disable-next-line
},[]) 


  return (
    <div className={`${darkMode}  App`}>
      <NavRoutes data={data} proyectos={proyectos} darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
