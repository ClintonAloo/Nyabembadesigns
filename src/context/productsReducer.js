import { CLOSE_SIDEBAR, HANDLE_SCROLL, OPEN_SIDEBAR } from "../actions";

const reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === HANDLE_SCROLL) {
    return { ...state, scroll: action.payload };
  }
};

export default reducer;
