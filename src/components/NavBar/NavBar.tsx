import React from "react";
import "./NavBar.scss";
import { Home, Users, Folder, Activity, AtSign, Cpu } from "react-feather";

function NavBar() {
  return (
    <div className="header z-50">
      <div className="header__logo flex items-center  justify-center gap-2 ">
        <strong className="text-red-600 text-[1.4rem]">REDLINE </strong>
        <Cpu className="text-red-600" />
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <Home />
              <span>Home</span>{" "}
            </a>
          </li>{" "}
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <Activity />
              <span>Services</span>{" "}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <Users />
              <span>Team</span>{" "}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <Folder />
              <span>Projects</span>{" "}
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <AtSign />
              <span>Contact</span>{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
