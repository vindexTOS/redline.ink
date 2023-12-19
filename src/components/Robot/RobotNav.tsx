import React from "react";
import { CiHome } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { UseRobotContext } from "../../context/RobotContext";
import { UseNavigationContext } from "../../context/NavigationContext";

function RobotNav() {
  const { robotState, RobotDispatch } = UseRobotContext();
  const { serviceRef, mainRef } = UseNavigationContext();
  const style = {
    a: ` flex items-center gap-2 hover:text-yellow-200 cursor-pointer`,
  };
  const scrollToSection = (ref: any) => {
    setTimeout(() => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };
  return (
    <div
      className={`text-white flex relative z-50 ${
        !robotState.closeNav && "hidden"
      }`}
    >
      <nav className="flex  flex-col font-geo">
        <h1>
          <span className="text-yellow-500">$ </span>გვერდებზე ნავიგაცია
        </h1>
        <div className="flex  flex-col  text-yellow-500 text-start p-3 gap-1">
          <a onClick={() => scrollToSection(mainRef)} className={style.a}>
            <CiHome /> მთავარი
          </a>
          <a onClick={() => scrollToSection(serviceRef)} className={style.a}>
            <GrServices /> სერვისები
          </a>
          <a className={style.a}>
            <RiTeamLine /> გუნდი
          </a>
          <a className={style.a}>
            <GoProjectRoadmap /> პროექტები
          </a>
          <a className={style.a}>
            <MdAlternateEmail /> კონტაქტი
          </a>
        </div>
      </nav>
      <MdCancel
        onClick={() =>
          RobotDispatch({ type: "CLOSE_TERMINAL_AND_NAV", payload: "" })
        }
        className="absolute right-[-1.5rem] hover:text-yellow-300 cursor-pointer z-50"
      />
    </div>
  );
}

export default RobotNav;
