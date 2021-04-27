import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          GAYATRI
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to={{
                  pathname: "/user/createUser",
                  state: { id: "" },
                }}
                className="nav-link"
              >
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user/viewAll" className="nav-link">
                View Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
