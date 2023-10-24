import Logo from "./Logo";
import { navLinks } from "../utils";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { useProductsContext } from "../context/ProductsProvider";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
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
        <button onClick={openSidebar} className="nav__toggle">
          <VscMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
