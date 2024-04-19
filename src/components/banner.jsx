import React from 'react';
import './css/banner.css';


const Banner = ()=>{
    return(
        <div className='banner'>
            <div className='left-banner'>
            <h1 className='headline'>
                <span style={{ color: '#00FF9D' }}>Ideas</span> 
                <span style={{ color: '#ffffff' }}> invisible even to </span>
                <span style={{ color: '#00FF9D' }}>radars.</span>
            </h1>

                
            </div>
            <div className='right-banner'>
                <img  className='imagelogo' src='./images/web-banner-fina-1024x1024.png' alt='' style={{height:550,width:530}}></img>
                
            </div>
            
        </div>
    

        
    )
}

export default Banner;
