const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_HOVERED_LINK_NAME':
        return {
          ...state,
          hoveredLinkName: action.payload,
        };
      default:
        return state;
    }
};

export default reducer;