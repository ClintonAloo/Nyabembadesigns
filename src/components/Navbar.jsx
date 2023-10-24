import Logo from "./Logo";
import { navLinks } from "../utils";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="content--center nav--center">
        <Logo />
        <ul className="nav__links">
          {navLinks.map(({ id, link, path }) => {
            return (
              <li key={id} className="nav__link">
                <Link to={path}>{link}</Link>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle">
          <VscMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
