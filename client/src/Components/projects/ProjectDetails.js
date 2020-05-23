import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            repudiandae a tempore vel facilis dolorum blanditiis dignissimos
            nobis sed nulla maiores, porro voluptates aliquid, soluta rem
            molestiae exercitationem natus beatae.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by tayfun sur</div>
          <div>22nd may 2020</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
