import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./productsReducer";
import { CLOSE_SIDEBAR, HANDLE_SCROLL, OPEN_SIDEBAR } from "../actions";
const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
  scroll: 0,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const handleScroll = () => {
    dispatch({ type: HANDLE_SCROLL, payload: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
