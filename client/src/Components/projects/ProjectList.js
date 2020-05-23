import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projectPropu}) => {
  // console.log(projectPropu);
  return (
    <div className="project-list section">
      {projectPropu.map(project => {
        return <ProjectSummary projectasd={project} key={project._id}/>
      })}
      
    </div>
  );
};
export default ProjectList;
