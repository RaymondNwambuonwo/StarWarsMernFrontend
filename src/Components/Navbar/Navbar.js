import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Characters" className="nav-link">
            Soilders
          </Link>
          <Link to="/CreateCharacter" className="nav-link">
            Sign Up
          </Link>
          <Link to="/UpdateCharacter" className="nav-link">
            Update Form
          </Link>
          <Link to="/DeleteCharacter" className="nav-link">
            Delete Soilder
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
