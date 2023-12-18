import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Particals from "./components/Particals";
import Home from "./components/Home/Home";
function LayOut() {
  const style = { main: `w-[100vw] h-[100vh] bg-[#171312]` };
  return (
    <main className={style.main}>
      <NavBar />
      <Particals />
      <Home />
    </main>
  );
}

export default LayOut;
