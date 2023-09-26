import logo from "../assets/logo.png";
import { RxCross1 } from "react-icons/rx";
import { navLinks } from "../utils";

export default function Sidebar({ closeSidebar, isSidebarOpen }) {
  return (
    <aside className={isSidebarOpen ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar__header">
        <img src={logo} alt="logo" className="logo" />
        <button onClick={closeSidebar} className="close__btn">
          <RxCross1 />
        </button>
      </div>
      <ul className="sidebar__links">
        {navLinks.map((navLink) => {
          return (
            <li
              onClick={closeSidebar}
              key={navLink.id}
              className="sidebar__link"
            >
              <a href="#">{navLink.link}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
