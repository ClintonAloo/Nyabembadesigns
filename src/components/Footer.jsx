import { socialLinks, navLinks } from "../utils";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content--center footer--center">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Nyabemba Design Point
        </p>
        <div className="social__links">
          {socialLinks.map(({ id, icon }) => {
            return (
              <a
                key={id}
                className="social__link"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            );
          })}
        </div>
        <ul className="footer__links">
          {navLinks.map(({ id, link, path }) => {
            return (
              <li key={id} className="footer__link">
                <Link to={path}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
