import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">The MealDB</div>
      </Link>
      <ul className="nav">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
