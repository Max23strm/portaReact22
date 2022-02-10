import React from 'react';
import Linked from "../images/LinkedIn.svg"
import Github from "../images/github.svg"
import "../styles/Social.css"
function Social() {
    return <div className='socialVertical'>
        <img src={Linked} alt="" />
        <img src={Github} alt="" />
    </div>;
}

export default Social
