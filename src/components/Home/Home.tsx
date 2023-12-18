import React, { useEffect } from "react";
import animationData from "../../assets/animations/Robot.json";
import Lottie from "react-lottie";
import { motion as m } from "framer-motion";
import Wave from "./Wave";
function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [resultText, setResultText] = React.useState<string[]>(["$ "]);

  const changeText = (mappingText: string[]) => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < mappingText.length) {
        const nextWord = mappingText[index];
        if (nextWord !== undefined) {
          setResultText((prevResultText: string[]) => [
            ...prevResultText,
            `${nextWord} `,
          ]);
        }
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 500);
  };
  const firstText = " Hello, and welcome to Redline Technologies".split(" ");
  const secondText = "How Can I Help You ?".split(" ");
  const ThText = "Please Contact Us At info@redline.ink ".split(" ");
  useEffect(() => {
    changeText(firstText);
    setTimeout(() => {
      setResultText(["$ "]);
      changeText(secondText);
    }, 5000);
    setTimeout(() => {
      setResultText(["$ "]);
      changeText(ThText);
    }, 10000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className=" h-[700px] w-[100%] flex items-center justify-center py-10  ">
      <m.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-gray-700/10 flex items-center justify-around h-[100%] backdrop-blur-sm w-[80%] rounded-[20px]"
      >
        {/* ANIMATION */}
        <m.div
          className="flex justify-center p-10 relative"
          variants={itemVariants}
        >
          <div className=" flex relative">
            <m.h1
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="  w-[220px] flex flex-wrap items-center gap-1 z-20 bottom-[-4rem] p-2 rounded-[12px] left-60 font-bold text-center text-[1.1rem]   absolute bg-black/90 "
            >
              {resultText.map((val: string, index: number) => (
                <p
                  className={`${
                    val == "Redline "
                      ? "text-red-600"
                      : val == "$ "
                      ? "text-yellow-300"
                      : val == "info@redline.ink "
                      ? "text-yellow-400"
                      : "text-green-500"
                  } text-center`}
                  key={val + index}
                >
                  {val}
                </p>
              ))}
            </m.h1>
            <Lottie options={defaultOptions} height={300} width={400} />
          </div>
        </m.div>
        <m.div
          variants={itemVariants}
          className="w-[50%] flex flex-col items-center justify-around py-40 h-[100%]"
        >
          <Wave />
          <p className="text-red-600 font-bold font-mono text-[2rem] text-center ">
            „ Choosing technologies isn't about personal preference; it's about
            empowering our clients with the best solutions tailored to their
            needs. „
          </p>
        </m.div>
      </m.section>
    </div>
  );
}

export default Home;
