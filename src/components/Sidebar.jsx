import { navLinks } from "../utils";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useProductsContext } from "../context/ProductsProvider";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <aside className={isSidebarOpen ? "sidebar sidebar--open" : "sidebar"}>
      <div onClick={closeSidebar} className="sidebar__see-through"></div>
      <div className="sidebar__body">
        <div className="sidebar__header">
          <button onClick={closeSidebar} className="sidebar__close">
            <AiOutlineClose />
          </button>
        </div>
        <ul className="sidebar__links">
          {navLinks.map(({ id, link, path }) => {
            return (
              <li onClick={closeSidebar} key={id} className="sidebar__link">
                <Link to={path}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
