import React from "react";
import './css/about.css'

const About=() =>{
    return(
        <section id="about">

      
        <div className="about" >
            <h1 className="aboutus" >About Us</h1>
            <p className=" para">
                At TLS, we’re a team of skilled professionals dedicated to empowering our clients’ marketing objectives.
                 With idea generators, brand strategists, digital specialists, rollout managers, and creative designers, 
                 we deliver unparalleled outcomes. We unlock the full potential of brands with innovative ideas and custom solutions that drive sustainable growth.
                 We’re passionate about delivering exceptional value and achieving our clients’ strategic objectives.</p>
            <h3 className="vision"> VISION STATEMENT</h3>
            <p className="para">To establish ourselves as the preeminent marketing consultancy that drives business growth and elevates brands through revolutionary ideas, ingenious strategies, and flawless execution.</p>
          

            <h3 className="vision"> MISSION STATEMENT</h3>
            <p className="para">Our mission is to collaborate with our clients to generate inspiring ideas, devise brand strategies that differentiate, optimize digital channels that convert, manage rollouts that deliver, and create plugs that resonate. We are dedicated to delivering exceptional value by harnessing our expertise, creativity, and technology to drive business outcomes and surpass our clients’ expectations.</p>
        
         <button class="gain">Gain a deeper insight</button>
        </div>


        </section>
    )
}
 
export default About;