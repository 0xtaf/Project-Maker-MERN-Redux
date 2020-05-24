import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projectPropu }) => {
  return (
    <div className="project-list section">
      {projectPropu.map((project) => {
        return (
          <Link to={'/project/' + project._id} key={project._id}>
            <ProjectSummary projectasd={project}  />
          </Link>
        );
      })}
    </div>
  );
};
export default ProjectList;
