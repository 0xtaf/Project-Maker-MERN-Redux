import React, { useContext } from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import {ProjectContext} from '../../contexts/ProjectContext';
const ProjectList = () => {

  const {projects} = useContext(ProjectContext)
  
  return (
    <div className="project-list section">
      {projects.map((project) => {
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
