// src/components/navbar.js
import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";


function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeDropdown}>
       <img
  src="/iitplogo.png"
  alt="IIT Patna"
  className="navbar-logo"
/>

          <div>
            <div style={{ fontWeight: 700 }}>ICHEC 2026</div>
            <small style={{ opacity: 0.85 }}>
              Dept. of Chemical &amp; Biochemical Engineering
            </small>
          </div>
        </Link>

        {/* Mobile toggler (still uses Bootstrap collapse) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={closeDropdown}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav items */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {!isHome && (
              <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeDropdown}>
                Home
              </NavLink>
            </li> 
            )}
            {/* About dropdown */}
            <li className={`nav-item dropdown ${openDropdown === "about" ? "show" : ""}`}>
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                onClick={() => toggleDropdown("about")}
              >
                About
              </button>
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  openDropdown === "about" ? "show" : ""
                }`}
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/about"
                    onClick={closeDropdown}
                  >
                    Conference Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/about/history"
                    onClick={closeDropdown}
                  >
                    Conference History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/about/committee"
                    onClick={closeDropdown}
                  >
                    Organizing Committee
                  </NavLink>
                </li>
              
              </ul>
            </li>

            {/* speakers */}
         
                
              <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/program/speakers"
                onClick={closeDropdown}
              >
                Speakers
              </NavLink>
            </li>

         

            {/* Travel dropdown */}
   
              <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/travel/patna"
                onClick={closeDropdown}
              >
                Travel
              </NavLink>
            </li>


            {/* Industry Ties dropdown */}
            <li className={`nav-item dropdown ${openDropdown === "industry" ? "show" : ""}`}>
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                onClick={() => toggleDropdown("industry")}
              >
                Industry Ties
              </button>
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  openDropdown === "industry" ? "show" : ""
                }`}
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industry/patron"
                    onClick={closeDropdown}
                  >
                    Become a sponsor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/industry/sponsors"
                    onClick={closeDropdown}
                  >
                    Sponsors Listing
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Simple links */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={closeDropdown}
              >
                Contact
              </NavLink>
            </li>

         

            <li className="nav-item ms-2">
              <NavLink
                className="btn btn-register"
                to="/registration"
                onClick={closeDropdown}
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
