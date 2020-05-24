let initState = { projectReducerdakiArray: [], projectReducerdakiArrayOne: [] };

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return {
        ...state,
        projectReducerdakiArray: action.payload,
        projectReducerdakiArrayOne: [],
      };
    case 'GET_PROJECT_DETAIL':
      return {
        ...state,
        projectReducerdakiArrayOne: action.payload,
      };
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
