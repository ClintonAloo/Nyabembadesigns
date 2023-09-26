import { navLinks } from "../utils";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar({ openSidebar }) {
  return (
    <nav className="nav">
      <div className="content--center nav--center">
        <div className="logo__container">
          <img src={logo} className="logo" />
        </div>
        <ul className="nav__links">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.id} className="nav__link">
                <a href="#">{navLink.link}</a>
              </li>
            );
          })}
        </ul>
        <div className="btn__container">
          <button onClick={openSidebar} className="menu__btn">
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}
