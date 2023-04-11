import React from "react";
import "../css/About.css";
const About = ()=>{
    return(
        <div className="about">
    <div className="img">
      <img src="/about.jpg" alt="" />
    </div>
    <div className="about-info">
      <span>Contact Management <span className="our">System</span></span>
      <p>
        This is a simple Contact Management System Designed with React and Node Js along with
        the Express js.
      </p>
    </div>
  </div>
    )
}
 
export default About;