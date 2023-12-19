import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Particals from "./components/Particals";
import Home from "./components/Home/Home";
import Robot from "./components/Robot/Robot";
import Services from "./components/Services/Services";
function LayOut() {
  const style = { main: `w-[100vw] h-[100%] relative bg-[#171312]` };
  return (
    <main className={style.main}>
      <NavBar />
      <Particals />
      <Robot />
      <Home />
      <Services />
    </main>
  );
}

export default LayOut;
