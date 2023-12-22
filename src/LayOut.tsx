import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Particals from "./components/Particals";
import Home from "./components/Home/Home";
import Robot from "./components/Robot/Robot";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { BsRobot } from "react-icons/bs";

import { UseRobotContext } from "./context/RobotContext";
function LayOut() {
  const style = { main: `w-[100vw] h-[100%] relative bg-[#171312]` };
  const { isRobotActive, setIsRobotActive } = UseRobotContext();
  return (
    <main className={style.main}>
      <NavBar />
      {!isRobotActive && (
        <BsRobot
          title="რობოტის ჩართვა"
          onClick={() => setIsRobotActive(!isRobotActive)}
          className="text-[3rem] text-yellow-400 fixed left-3 cursor-pointer hover:text-yellow-500 top-8  z-50 "
        />
      )}

      <Particals />
      {isRobotActive && <Robot />}
      <Home />
      <Services />
      <Team />
      <Projects />
      <Contact />
    </main>
  );
}

export default LayOut;
