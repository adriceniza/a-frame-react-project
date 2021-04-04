import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <Link
        to="/welcome"
        className={navbar ? "navbar-logo active" : "navbar-logo"}
      >
        <div className="Header-branding">InRoom</div>
      </Link>
      <div className={"menu-icon"} onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a className="nav-links" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-links" href="#Aboutus">
            About us
          </a>
        </li>
        <li className="nav-item">
          <Link
            to="/Game"
            className={navbar ? "nav-links active" : "nav-links"}
            onClick={closeMobileMenu}
          >
            Game
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
