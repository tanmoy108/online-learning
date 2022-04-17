import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  navbarbackground sticky-top">
      <div className="container">
        <NavLink className="navbar-brand navbartext" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link navbartext px-2" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item navbartext px-2">
              <NavLink className="nav-link" to="/Course">
                Course
              </NavLink>
            </li>
            <li className="nav-item navbartext px-2">
              <NavLink className="nav-link" to="/About">
                About Us
              </NavLink>
            </li>
            <li className="nav-item navbartext px-2">
              <NavLink className="nav-link" to="/Book">
                Book Store
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
