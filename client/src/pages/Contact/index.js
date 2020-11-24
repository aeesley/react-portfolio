import React from "react";
import "./style.css";

function Contact(props) {
  return (
    <div className="card">
      <h1>Let's Connect!</h1>
      <h4>Email</h4>
      <a href = "mailto: alex@eesleyconsulting.com" target="_blank">Send me an email.</a>
      <h4>Linkedin</h4>
      <a href="https://www.linkedin.com/in/alexandra-eesley-0998a81a/" target="_blank">See my past experience.</a>
      <h4>Github</h4>
      <a href="https://github.com/aeesley" target="_blank">Explore my projects.</a>
    </div>
  
  );
}

export default Contact;
