import React, { useState, useEffect } from "react";
import HomeButton from "../HomeButton/HomeButton";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <>
        <nav className="navbarheader">
          <div className="navbar-containerheader">
            <Link
              to="/"
              className="navbar-logoheader"
              onClick={closeMobileMenu}
            >
              ICAF
              <i className="fab fa-typo3" />
            </Link>
            <div className="menu-iconheader" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menuheader active" : "nav-menuheader"}>
              <li className="nav-itemheader">
                <Link
                  to="/"
                  className="nav-linksheader"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav--itemheader">
                <Link
                  to="/home/news"
                  className="nav-linksheader"
                  onClick={closeMobileMenu}
                >
                  News
                </Link>
              </li>
              <li className="nav--itemheader">
                <Link
                  to="/home/speakers"
                  className="nav-linksheader"
                  onClick={closeMobileMenu}
                >
                  Speakers
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="nav-links-mobileheader"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && (
              <HomeButton buttonStyle="btn--outline">Login</HomeButton>
            )}
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;
