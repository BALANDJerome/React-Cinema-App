import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>React Movies</h1>
      <nav>
        <ul>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/"
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/userlist"
          >
            <li>Favoris</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
