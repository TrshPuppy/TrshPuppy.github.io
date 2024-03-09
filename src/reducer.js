export default (state, action) => ({
   'SET_FETCHING': () => ({...state, fetching: action.payload}),
   'SET_REPOS_FETCHED': () => ({ ...state, reposFetched: action.payload }),
   'FETCH_REPOS': () => ({ ...state, repos: action.payload }),
}[action.type]?.() || state);