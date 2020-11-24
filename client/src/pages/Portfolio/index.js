import React, { useState } from "react";
// import "./style.css";
import ProjectCard from '../../components/ProjectCard.js'

function Portfolio(props) {

  const [state, setState] = useState({
    projects: [
        {
           title: "Veguru App",
           liveLink: "https://dry-oasis-44384.herokuapp.com/",
           repoLink: "https://github.com/aeesley/project-2-veguru",
        },
        {
           title: "Restaurant Roulette App",
           liveLink: "https://k1te-m.github.io/Project-1-Restaurant-Roulette/",
           repoLink: "https://github.com/k1te-m/Project-1-Restaurant-Roulette",
        },
        {
          title: "Eat-Da-Burger App",
          liveLink: "https://floating-crag-94174.herokuapp.com/",
          repoLink: "https://github.com/aeesley/burger-hw",
        },
        {
          title: "Weather Dashboard App",
          liveLink: "https://aeesley.github.io/weather-dashboard-hw/",
          repoLink: "https://github.com/aeesley/weather-dashboard-hw",
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
