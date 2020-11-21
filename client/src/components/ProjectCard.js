import React from "react";
// import "./style.css";

function ProjectCard(props) {
  return (
    <div>
    <div className="row">
      <div className="col-sm">
        {props.title}
      </div>
      <div className="col-sm">
        {props.liveLink}
      </div>
      <div className="col-sm">
        {props.repoLink}
      </div>
      {/* <div className="col-sm">
        {props.thumbnail}
      </div> */}
    </div>
</div>
  );
}

export default ProjectCard;