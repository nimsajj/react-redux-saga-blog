import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { getJwt } from "../common/storage";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const renderedNavItem = () =>
    !getJwt() ? (
      <>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </>
    ) : (
      <li className="nav-item">
        <Link to="/logout" className="nav-link">
          Logout
        </Link>
      </li>
    );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-block"></span>
        <Link to="/" className="navbar-brand">
          Blog
        </Link>
        <div className="w-100 text-right">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navBarLink"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div
        id="navBarLink"
        className={`${
          isNavCollapsed ? "collapse" : ""
        } navbar-collapse flex-grow-1 text-right`}
      >
        <ul className="navbar-nav ml-auto flex-nowrap">{renderedNavItem()}</ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
