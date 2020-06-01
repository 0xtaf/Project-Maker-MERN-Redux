import React, {useState, useContext} from 'react';
import {ProjectContext} from '../../contexts/ProjectContext'
import axios from 'axios';
const CreateProject = (props) => {
  const {dispatch} = useContext(ProjectContext)

  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // createProject(state)
    dispatch({type: 'CREATE_PROJECT', state})
    axios.get('api/projects').then((res) => {
      dispatch({type:'GET_PROJECTS', payload: res.data})
    });
    props.history.push("/")
  };


    return (
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="input-field">
            <button className="btn pinlighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  
}



export default CreateProject;
