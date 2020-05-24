import axios from 'axios';

export const getProject = () => {
  return (dispatch, getState) => {
    
    axios.get('/api/projects').then((res) =>
      dispatch({
        type: 'GET_PROJECTS',
        payload: res.data,
      })
    );
  };
};

export const getProjectDetail = (id) => {
  return (dispatch, getState) => {
    axios.get(`/api/projects/${id}`).then((res) =>
      dispatch({
        type: 'GET_PROJECT_DETAIL',
        payload: res.data,
      })
    );
  };
};

export const createProject = (project) => {
  return (dispatch, getState) => {
    axios.post('/api/projects', project).then((res) => {
      dispatch({
        type: 'CREATE_PROJECT',
        project: res.data,
      });
    });
  };
};
