import React, { useContext } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import axios from 'axios';
const ProjectDetails = (props) => {
  const { projects, dispatch } = useContext(ProjectContext);
  

  const handleDelete = (id) => {
    dispatch({type: 'DELETE_PROJECT', id: id})
    axios.get('api/projects').then((res) => {
      dispatch({type:'GET_PROJECTS', payload: res.data})
    });
    props.history.push("/")
  }
  const project = projects.find(
    (project) => project._id === props.match.params.id
  );
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>22nd may 2020</div>
            <button className="btn pinlighten-1 z-depth-0" onClick={() => handleDelete(project._id)}>Delete</button>
          </div>
          
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProjectDetails;
