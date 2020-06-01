import React, { createContext, useReducer, useEffect } from 'react';
import { projectReducer } from '../reducers/projectReducer';
import axios from 'axios';

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const  [projects, dispatch ] = useReducer(projectReducer, []);
  
  useEffect(() => {
    async function getData() {
      try {
        axios.get('/api/projects').then((res) => {
          dispatch({ type: 'GET_PROJECTS', payload: res.data });
        });
      } catch (error) {}
    }
    getData();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
