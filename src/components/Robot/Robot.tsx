import React from "react";
import Lottie from "react-lottie";
import { motion as m } from "framer-motion";
import animationData from "../../assets/animations/Robot.json";
import Terminal from "./Terminal";
import Prompts from "./Prompts";
import RobotNav from "./RobotNav";
import InterFace from "../../assets/icons/interface.png";
import Loca from "../../assets/icons/location.png";
import { UseRobotContext } from "../../context/RobotContext";
import Contacts from "./Contacts";
import { useWindowScroll } from "react-use";

function Robot() {
  const { robotState, RobotDispatch } = UseRobotContext();

  const [scrollY, setScrollY] = React.useState(10);
  const { y: pageYOffset } = useWindowScroll();

  React.useEffect(() => {
    setScrollY(pageYOffset);
  }, [pageYOffset]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const screenSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const dragConstraints = {
    left: 0,
    right: screenSize.width - 500,
    top: 0,
    bottom: screenSize.height - 333,
  };
  const style = {
    mainDiv: `flex absolute  z-50`,
    section: ` w-[100%] h-[100%] `,
    iconWrapper: `absolute flex gap-2 left-[14rem] top-[-1.2rem] `,
    icon: `w-[40px] h-[40px] cursor-pointer z-50`,
  };

  const RobotTerminalViews = () => {
    switch (robotState.RobotSwtich) {
      case "PROMPTS":
        return <Prompts />;
      case "NAV":
        return <RobotNav />;
      case "CONTACT":
        return <Contacts />;
      default:
        return <Prompts />;
    }
  };

  const handleNav = () => {
    RobotDispatch({ type: "ROBOT_SWTICH", payload: "NAV" });
    RobotDispatch({ type: "CLOSE_NAV", payload: "" });
    RobotDispatch({ type: "CLOSE_TERMINAL", payload: false });
  };
  const handleContact = () => {
    RobotDispatch({ type: "CLOSE_TERMINAL", payload: false });
    RobotDispatch({ type: "CONTACT", payload: "CONTACT" });
  };

  return (
    <m.div
      style={{ top: scrollY }}
      //   className={style.section}
      drag={true}
      dragConstraints={dragConstraints}
      initial={{ y: 140 }}
      dragElastic={true}
      dragMomentum={true}
      transition={{ duration: 0.6, type: "spring" }}
      className={style.mainDiv}
    >
      <Terminal>
        <RobotTerminalViews />
      </Terminal>

      <div className={style.iconWrapper}>
        <img
          onClick={handleContact}
          title="კონტაქტი"
          className={style.icon}
          src={InterFace}
        />
        <img
          onClick={handleNav}
          title="საიტის რუკა"
          className={`${style.icon} mt-4`}
          src={Loca}
        />
      </div>

      <Lottie
        onDoubleClick={handleNav}
        options={defaultOptions}
        height={300}
        width={400}
        isClickToPauseDisabled={true}
      />
    </m.div>
  );
}

export default Robot;
