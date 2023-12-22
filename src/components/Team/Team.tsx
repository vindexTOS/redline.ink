import React, { useEffect, useState } from "react";
import { UseNavigationContext } from "../../context/NavigationContext";
import { collection, getDocs, orderBy, query } from "@firebase/firestore/lite";
import { db, fetchData } from "../../firebase/firebase";
import TeamCard from "./TeamCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export type TeamMember = {
  abilities: string[];
  email: string;
  name: string;
  photo: string;
  skills: string[];
  subTitle: string;
  title: string;
  id: string;
};
export default function Team() {
  const [TeamData, setTeamData] = useState<TeamMember[]>();
  const { teamRef } = UseNavigationContext();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchData("team");
        setTeamData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error("error");
      }
    };
    getData();
  }, []);
  const controls = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[100%] py-40 w-[100%] flex flex-col items-center  flex items-center justify-around gap-10 ">
      <span ref={teamRef}></span>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="w-[90%]     flex flex-wrap  items-center bg-blue-800/10 rounded-[8px] boxShaddow justify-around py-20 gap-10 h-[100%] "
      >
        <div className="flex items-center gap-4 justify-center flex-col w-[90%]">
          <h1 className="font-geo smallText   text-[3rem] text-white textshadow z-50 ">
            გაიცანით ჩვენი გუნდი
          </h1>
          <p className="font-geo smallTextDec max_smm:w-[95%]  text-[1.4rem] text-white textshadow z-50 w-[60%] text-center  ">
            გამოცდილი და თანამედროვე ტექნოლოგიებით აღჭურვილი გუნდი რომელიც არ
            უშინდება არანაირ გამოწვევას.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-20 w-[100%]">
          {TeamData?.map((val: TeamMember) => (
            <TeamCard member={val} key={val.id} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
