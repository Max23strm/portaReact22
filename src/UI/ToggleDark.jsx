import React from 'react'
import '../styles/ToggleDark.css'

function ToggleDark({setDarkMode}) {
    const cambioTema=(e)=>{
        if(e.target.checked===true){
            setDarkMode("")
        } else{
            setDarkMode("dark")
        }
    }
    return (
        <div className="onoffswitch">
            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" tabIndex="0" defaultChecked={true} onChange={(e)=>cambioTema(e)} />
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
            </label>
        </div>

        )
}

export default ToggleDark