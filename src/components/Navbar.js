import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function NavBar() {
  return (
    <>
    <div className="navbar">
      <Link to="/">
          <img src="logo.png" className="navbar-img"/> 
      </Link>
      <nav>
          <Link to="/" className="navbar-item">
              <b>Home</b>
          </Link>
          <Link to="/resume" className="navbar-item">
            <b>Resume</b>
          </Link>
          <Link to="/research" className="navbar-item">
            <b>Research</b>
          </Link>
          <Link to="/contact" className="navbar-item">
            <b>Contact</b>
          </Link>
      </nav>
    </div>
    </>
    )
}

export default NavBar;
