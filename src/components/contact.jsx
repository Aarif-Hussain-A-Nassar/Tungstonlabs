import React from "react";
import './css/contact.css';

const Contact=()=>{
    return(
        <div className="contacthead" id="contact">
        <h1 className="con">Contact.</h1>
             <div className="contactmain">
                <div className="form">

      
                <form >
                            <div className="form">
                            
                            <input className="forms"
                            placeholder="First Name"
                                type="text"
                                id="firstName"
                                name="firstName"
                                
                            />
                            </div>
                            <div className="form">
                            
                            <input className="forms" 
                            placeholder="Last Name"
                                type="text"
                                id="lastName"
                                name="lastName"
                            
                            />
                            </div>
                            <div className="form">
                            
                            <input className="forms"
                            placeholder="Company"
                                type="text"
                                id="companyName"
                                name="companyName"
                            
                            />
                            </div>
                            <div className="form">
                            
                            <input  className="forms"
                            placeholder="Company Email"
                                type="email"
                                id="companyEmail"
                                name="companyEmail"
                                
                            />
                            </div >
                            <h1 className="head">How can we help you?</h1>
                          
                            <select  className="forms" id="dropdown" >
                                <option value="option1">Strategic Development and Optimisation of Digital/Media Channels</option>
                                <option value="option2">Brand Development and Positioning</option>
                                <option value="option3">OAd Campaign Conceptualization and Implementation</option>
                                <option value="option3">Tech-enabled Growth and Scaling Business Intelligence and Analytics</option>
                                <option value="option3">Tailor Made</option>
                            </select>
                            
                            <br></br>
                          
                                <h1 className="head ">Company size</h1>
                                <select className="forms" id="dropdown" >
                                <option value="option1">2 to 10 employees</option>
                                <option value="option2">11 to 50 employees</option>
                                <option value="option3">51 to 200 employees</option>
                                <option value="option3">201 to 500 employees</option>
                                <option value="option3">501+ employees</option>
                            </select>

                           

                        
                            <h1 className="heads">How did you hear about Tungstonlabs ?</h1>
                            <select className="forms" id="dropdown" >
                                <option value="option1">Recommended by a friend or colleague</option>
                                <option value="option2">Recommended by a friend or colleague</option>
                                <option value="option3">Google/search engine</option>
                                <option value="option3">Press mention</option>
                                <option value="option3">Social media</option>
                                <option value="option3">Blog or other publication</option>
                                <option value="option3">Webinars</option>
                                <option value="option3">Other</option>
                            </select>
                           

                            <textarea className="messageforms" rows={5}  id="subject"  placeholder="Message" ></textarea>
                          

                            
                            <button  className="submit"type="submit">SUBMIT</button>
                        

                            </form>
                            </div>




              
                <div className="contactdiscription">
                    <p>Thank you for expressing your interest in our services. We are thrilled to have the opportunity to learn more about your business and explore ways to collaborate towards achieving your objectives. Kindly fill out the form below or use the provided contact details to reach us. We will promptly respond to your inquiry and initiate a conversation on how we can assist you. Thank you for considering us as your partner, and we look forward to hearing from you soon. </p>
                    <h1> <span style={{ color: '#00FF9D' }}>#</span> 
                <span style={{ color: '#ffffff' }}> TLS </span>
                <span style={{ color: '#00FF9D' }}>.</span></h1>
                </div>

            </div>
        </div>
    )
}

export default Contact;