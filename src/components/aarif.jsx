import React from 'react';
import './css/header.css';

const Display=() =>{
    return( 
    <div className="Header">
        <div className="leftheader">
        <a href="http://localhost:3000/Tungston-Labs" className='Logo'>
        <img  className="logoleft"src="../build/images/1.png" alt="" style={{ height: 64, width: 200 }} />
       

        </a>

        </div>
        <div className="rightheader">
        <ul>
            <li> <a className="list"href="https://www.google.com/">Home</a></li>
            <li><a className="list"href="https://www.google.com/">About us</a></li>
            <li><a className="list" href="https://www.google.com/">Services</a></li>
            <li><a className="list" href="https://www.google.com/">Contact Us</a></li>
        </ul>
        </div>

    </div>
    );
}
export default Display;
