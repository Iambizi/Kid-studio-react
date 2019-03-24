import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link className="title" to="/">
        <div className="titleImg">
          <img
            id="logo-img"
            src="http://kidstudio.co/assets/images/kid.png"
            alt=""
          />
        </div>
      </Link>
      <div className="menu-links">
        <NavLink className="nav-links" to="/design">
          DESIGN
        </NavLink>

        <NavLink className="nav-links" to="/film">
          FILM
        </NavLink>

        <NavLink className="nav-links" to="/blog">
          BLOG
        </NavLink>

        <NavLink className="nav-links" to="/info">
          INFO
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
