import "./header.sass";

import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";

import { LoginContext } from "../../context/SignInContext";
import logo from "../../assets/imgs/logo.svg";

const Header = () => {
  const { isLogin, toggleLogin } = useContext(LoginContext);

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
              <NavLink
                exact="true"
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact="true" to="/movies">
                pages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" exact="true" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact="true" to="/movies">
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact="true" to="/movies">
                celebs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact="true" to="/movies">
                Blog
              </Link>
            </li>
            {!isLogin ? (
              <li className="nav-item sign-in">
                <Link className="nav-link" exact="true" to="login">
                  LogIn
                </Link>
              </li>
            ) : (
              <li className="nav-item sign-in">
                <Link
                  className="nav-link"
                  exact="true"
                  to="/"
                  onClick={toggleLogin}
                >
                  LogOut
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
