import Axios from 'axios';

export const projectReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return action.payload;

    case 'CREATE_PROJECT':
      Axios.post('/api/projects', action.state)

    case 'DELETE_PROJECT':
      console.log(action.id);
      Axios.delete(`/api/projects/` + action.id);

    default:
      return state;
  }
};
