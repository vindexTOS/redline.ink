import React from "react";
import Lottie from "react-lottie";
import { motion as m } from "framer-motion";
import Wave from "../Blob/Wave";
import { UseNavigationContext } from "../../context/NavigationContext";

function Home() {
  const { mainRef } = UseNavigationContext();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={mainRef}
      className=" h-[100%] py-40 w-[100%] flex flex-col items-center  flex items-center justify-center gap-4  "
    >
      <m.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" w-[90%]   gap-5 flex flex-col items-center bg-blue-800/10 rounded-[8px] boxShaddow justify-around  max_smm:py-10 py-40 h-[100%]"
      >
        <m.div
          variants={itemVariants}
          className="w-[100%] flex flex-col items-center justify-around py-40 h-[100%]  "
        >
          {/* <Wave /> */}
          <p className="text-red-600 font-bold font-mono text-[3rem] max_md:text-[1rem] w-[85%] text-center  	 ">
            „Choosing technologies isn't about personal preference; it's about
            empowering our clients with the best solutions tailored to their
            needs.„
          </p>
        </m.div>
      </m.section>
    </div>
  );
}

export default Home;
