import "./header.sass";

import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/imgs/logo.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                exact="true"
                
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                exact="true"
                
                to="/movies"
              >
                pages
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                exact="true"
                to="/movies"
              >
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                exact="true"
                
                to="/movies"
              >
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                exact="true"
                
                to="/movies"
              >
                celebs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                exact="true"
                
                to="/movies"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item sign-in">
              <Link
                className="nav-link"
                exact="true"
                
                to="login"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
