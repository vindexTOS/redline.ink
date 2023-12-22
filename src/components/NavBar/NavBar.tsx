import React from "react";
import "./NavBar.scss";
import { Home, Users, Folder, Activity, AtSign, Cpu } from "react-feather";
import { UseNavigationContext } from "../../context/NavigationContext";

function NavBar() {
  const {
    serviceRef,
    mainRef,
    teamRef,
    projectRef,
    contactRef,
    scrollToSection,
  } = UseNavigationContext();

  return (
    <div className="header z-50">
      <div className="header__logo flex items-center  justify-center gap-2 ">
        <strong className="text-red-600 text-[1.4rem]">REDLINE </strong>
        <Cpu className="text-red-600" />
		  </div>
		  
      <nav className="navbar  max_lg:hidden">
        <ul className="navbar__menu">
          <li className="navbar__item cursor-pointer">
            <a
              onClick={() => scrollToSection(mainRef, "main")}
              className="navbar__link"
            >
              <Home />
              <span>Home</span>{" "}
            </a>
          </li>
          <li className="navbar__item cursor-pointer">
            <a
              onClick={() => scrollToSection(serviceRef, "service")}
              className="navbar__link"
            >
              <Activity />
              <span>Services</span>{" "}
            </a>
          </li>
          <li className="navbar__item cursor-pointer">
            <a
              onClick={() => scrollToSection(teamRef, "team")}
              className="navbar__link"
            >
              <Users />
              <span>Team</span>{" "}
            </a>
          </li>
          <li className="navbar__item cursor-pointer">
            <a
              onClick={() => scrollToSection(projectRef, "project")}
              className="navbar__link"
            >
              <Folder />
              <span>Projects</span>{" "}
            </a>
          </li>
          <li className="navbar__item cursor-pointer">
            <a
              onClick={() => scrollToSection(contactRef, "contact")}
              className="navbar__link"
            >
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
