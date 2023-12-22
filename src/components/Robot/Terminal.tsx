import React from "react";
import { motion as m } from "framer-motion";
import { UseRobotContext } from "../../context/RobotContext";
function Terminal({ children }: { children: React.ReactNode }) {
  const { robotState } = UseRobotContext();
  return (
    <m.h1
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      className={` ${
        robotState.closeTerminal && "hidden"
      } w-[220px] flex flex-wrap items-center max_sm:left-20 max_sm:bottom- gap-1 z-20 top-1 p-2 rounded-[12px] left-80 font-bold text-center text-[1.1rem]   absolute bg-black/90 `}
    >
      {children}
    </m.h1>
  );
}

export default Terminal;
