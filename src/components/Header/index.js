import React from "react";
import style from "./style.module.css";
import Logo from "../../assets/images/DnD-Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.header_bar}>
      <div className="container">
        <div className={style.header}>
          <div className={style.header__logo}>
            <img src={Logo} alt="D&D Logo" />
          </div>
          <div className={style.header__right}>
            <ul className={style.header__menu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favourites">favourites</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
