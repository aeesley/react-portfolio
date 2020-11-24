import React, {useState} from "react";
import "./style.css";


function About(props) {



    var myStyles = {
        header: {
            backgroundColor: 'blue'
        }
    }

  return (
    <div  className="card">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img src="./head-shot.png" id="aboutmg" alt="alex eesley headshot"></img>
          </div>
          <div class="col-sm">
            <p>Full stack web developer and digital marketing expert with extensive entrepreneurship and leadership experience, including an MBA. Earned a certificate from Northwestern University’s Full Time Coding Program while running a successful consulting business at the same time. </p>
                    
            <p>Focused on full stack web technologies, like JavaScript, CSS, HTML, Node.js, APIs, MySQL, and React, among others, and eager to continue building a robust skillset.</p>
                        
            <p>Excited to approach problem solving and programming challenges with a fresh approach driven by a unique ability to switch seamlessly between data-driven functionality and intentional UX design. Invigorated by fast-paced environments, efficiency, challenge, collaboration, and change. Motivated by impact, results, and the drive to never stop learning and transforming.</p>

            <p>In her free time, Eesley spends time with her husband and two daughters, volunteers her skills to serve her community, and lets her creativity flow with whatever passion projects she's currently dreaming up.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
