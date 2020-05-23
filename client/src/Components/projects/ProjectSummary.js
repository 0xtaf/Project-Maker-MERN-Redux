import React from 'react';

const ProjectSummary = ({projectasd}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{projectasd.title}</span>
        <p>Posted by Tayfun Sur</p>
        <p className="grey-text">22th May</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
