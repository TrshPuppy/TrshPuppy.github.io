export default (state, action) => ({
   'FETCH_PROJECTS': () => ({ ...state, projects: action.payload }),
}[action.type]?.() || state);