import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <header className="header__logo">
        <img src={Logo} alt="Smile&Pay logo" />
      </header>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/recap">Récapitulatif</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
