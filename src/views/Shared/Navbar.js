import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        id="masthead"
        className="navbar navbar-expand-lg navbar-light fixed-top"
      >
        <a className="navbar-brand" href="/">
          <img
            className="navbar-brand"
            height="30"
            width="30"
            alt="Our Spot Logo"
            src="https://ourspotkc.azurewebsites.net/wp-content/uploads/2019/04/logo-no-text-e1555261115748.png"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="http://outskrts.com">
                  Events
                </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
