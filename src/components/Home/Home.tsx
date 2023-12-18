import React from "react";
import animationData from "../../assets/animations/Robot.json";
import Lottie from "react-lottie";
import { FaFacebook } from "react-icons/fa6";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" h-[700px] w-[100%] flex items-center justify-center py-10  ">
      <section className="bg-gray-700/10 flex items-center justify-around h-[100%] backdrop-blur-sm w-[80%] rounded-[20px]">
        <div className="w-[50%] flex flex-col items-center justify-around h-[100%]">
          <h1 className="text-gray-200 font-bold text-[2rem]">
            Hello, and welcome to <span className="text-red-600"> RedLine</span>{" "}
            Technologies
          </h1>
          <p className="text-gray-400 font-bold font-mono text-[1.6rem] text-center ">
            „ Choosing technologies isn't about personal preference; it's about
            empowering our clients with the best solutions tailored to their
            needs. „
          </p>
          <div>
            <a href="">
              <FaFacebook />
            </a>
          </div>
        </div>
        {/* ANIMATION */}
        <div className="flex    justify-center   p-10 relative">
          <div className=" ">
            <Lottie options={defaultOptions} height={300} width={400} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
