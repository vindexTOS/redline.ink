import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Particals from "./components/Particals";
import Home from "./components/Home/Home";
import Robot from "./components/Robot/Robot";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function LayOut() {
  const style = { main: `w-[100vw] h-[100%] relative bg-[#171312]` };
  return (
    <main className={style.main}>
      <NavBar />

      <Particals />
      <Robot />
      <Home />
      <Services />
      <Team />
      <Projects />
      <Contact />
    </main>
  );
}

export default LayOut;
