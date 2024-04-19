import React from "react";
import './css/footer.css';
import facebook from "./images/facebook.png"

const Footer=()=>{

    return(
        
        <div className=" footer">

            <div className="firstfooter">
                <div className="first1">
                    <img src="/images/footer.png" alt="" style={{ height: 150, width: 150 }}/>

                </div>
                <div className="first2">
                    <h1><span style={{ color: '#ffffff' }}>TLS</span> 
                <span style={{ color: '#00FF9D' }}> . </span></h1>
                    
                </div>
                <div className="first3">
                    <h1>A groundbreaking campaign spearheaded by TLS's vision.</h1>
                </div>

            </div>

           <div >
            <hr className="lines"/>
           </div>

            <div className="secondfooter">
             <div className="second1">
                <h5>PHONE</h5>

                <h2>+91 7561049196 <br />
                +49 17684162253

                </h2>


                <h5>ADDRESS</h5>
                <h2>Tungston Labs, Buschkrugallee 31A, 12359, Berlin, Germany</h2>   

                <h5>Copyright © 2023.</h5>             


             </div>
             <div className="second2">

                <h5>ENQUIRIES</h5>

                    <h2>
                    info@tungstonlabs.com

                    </h2>

                    <h2>
                        Privacy Policy
                    </h2>

                    <h5>FOLLOW</h5>

                    <img src={facebook}alt=""style={{ height: 20, width: 20 }} ></img>
                    <img src="/images/linkedin.png" alt="" style={{ height: 20, width: 20 }} ></img>
                    <img src="/images/youtube.png" alt="" style={{ height: 20, width: 20 }} ></img>
                    <img src="/images/instagram.png" alt="" style={{ height: 20, width: 20 }} ></img>

             </div>
             <div className="second3">

                <h5>SUBSCRIBE</h5>

                <input  className ="email"type="email" placeholder="Email" /> <br />
                <button className="emailsubmit">SEND</button>

             </div>
            </div>
        
        </div>
        
    );

}

export default Footer;