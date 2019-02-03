import React from "react";
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          {/* <a className="nav-link" href="/search">Search</a> */}
          <Link className="nav-link" to="/">Search</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/saved">Saved</a> */}
          <Link className="nav-link" to="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
