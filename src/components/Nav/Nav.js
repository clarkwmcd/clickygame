import React from "react";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Clicky Game</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {props.status}
        </li>
        <li className="nav-item">
          Score:{props.counter}
        </li>
        <li className="nav-item">
          <span> | </span>
        </li>
        <li className="navbar-item">
          Top Score:{props.topScore}
        </li>
      </ul>
    </div>
  </nav>


);

export default Nav;
