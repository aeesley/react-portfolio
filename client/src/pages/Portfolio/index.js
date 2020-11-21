import React, { useState } from "react";
// import "./style.css";
import ProjectCard from '../../components/ProjectCard.js'

function Portfolio(props) {

  const [state, setState] = useState({
    projects: [
        {
           title: "Project1",
           liveLink: "heroku.com",
           repoLink: "github.com",
           thumbnail: ""
        },
        {
           title: "Project2",
           liveLink: "heroku.com",
           repoLink: "github.com",
           thumbnail: ""
        }
    ]
})
console.log("returning state", state);

  return (
    <div>
    {state.projects.map(function(eachProject) {
      return (
      <ProjectCard 
        title={eachProject.title}
        liveLink={eachProject.liveLink}
        repoLink={eachProject.repoLink}
        // thumbnail={eachProject.thumbnail}
        />
        )
    })}
    </div>
  );
}

export default Portfolio;
