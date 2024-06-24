import React from 'react';
import './css/header.css';
import logo from './images/new-web-logo-2048x652.png';

const Display=() =>{
    return( 
    <div className="Header">
        <div className="leftheader">
        <a href="http://localhost:3000/Tungston-Labs" className='Logo'>
        <img  className="logoleft"src={logo} alt="" style={{ height: 64, width: 200 }} />
       

        </a>

        </div>
        <div className="rightheader">
        <ul>
            <li> <a className="list"href="#home" >Home</a></li>
            <li><a className="list"href="#about">About us</a></li>
            <li><a className="list" href="#services">Services</a></li>
            <li><a className="list" href="#contact">Contact Us</a></li>
        </ul>
        </div>

    </div>
    );
}
export default Display;
