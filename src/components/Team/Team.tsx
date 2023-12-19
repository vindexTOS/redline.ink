import React, { useEffect, useState } from "react";
import { UseNavigationContext } from "../../context/NavigationContext";
import { collection, getDocs, orderBy, query  } from "@firebase/firestore/lite";
import { db } from "../../firebase/firebase";

export default function Team() {
  const [TeamData, setTeamData] = useState<any>();
  const { teamRef } = UseNavigationContext();

  useEffect(() => {
    const fetchData = async () => {
         try {
           const collectionRef = await collection(db, "team")
           const q = await query(collectionRef)

           const querySnapShot = await getDocs(q)
           const data: any = []

           querySnapShot.forEach((doc) => {
             data.push({id:doc.id, ...doc.data()})
           })
          
           setTeamData(data)
         } catch (error) {
            throw new Error("error")
         }
     }

   fetchData()
  }, []);
  return (
    <div
      onClick={() => console.log(TeamData)}
      ref={teamRef}
      className="text-[4rem] text-white"
    >
      Team
    </div>
  );
}
