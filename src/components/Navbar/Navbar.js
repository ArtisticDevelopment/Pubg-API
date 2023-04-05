import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <nav>
        <div className="navbarContainer">
          <a href="/home" className="logo">
            Pubg API
          </a>
        </div>
        <div className="nav-container">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
