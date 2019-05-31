import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-7 col-lg-9">
              <h4>Sign up for our Newsletter</h4>
              <form id="newsletterSignupForm">
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="EmailAddress"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  >
                  <small id="emailHelp" className="form-text text-muted">
                    {"We'll never share your email with anyone else."}
                  </small>
                </div>
                <button type="submit" className="btn submit">
                  Submit
                </button>
              </form>
            </div>
            <div className="col col-sm-12 col-md-5 col-lg-3">
              <h4 className="text-center">Site Map</h4>
              <ul className="nav flex-column">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
