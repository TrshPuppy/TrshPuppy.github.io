export default (state, action) => ({
    'UPDATE_HOVERED_LINK_NAME': () => ({ ...state, hoveredLinkName: action.payload }),
    'UPDATE_HOVERED_LINK_COLOR': () => ({ ...state, hoveredLinkColor: action.payload }),
    'UPDATE_HOVERED_TEXT_COLOR': () => ({ ...state, hoveredTextColor: action.payload }),
    'FETCH_PROJECTS': () => ({...state, projects: action.payload})
}[action.type]?.() || state);