import React from "react";
import { FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Contacts() {
  const style = {
    a: ` flex items-center gap-2 hover:text-yellow-200 cursor-pointer max_x:text-[2px] `,
  };
  return (
    <nav className="flex  flex-col font-geo ">
      <h1 className="text-yellow-500 text-[14px]">
        <span className="text-yellow-500">$ </span>საკონტაქტო ინფორმაცია
      </h1>
      <div className="flex max_x:text-[12px]  flex-col  text-yellow-500 text-start p-3 gap-1">
        <a className={style.a}>
          <FaFacebook />
          Redline რედლაინი
        </a>
        <a className={style.a}>
          <MdAlternateEmail /> info@redline.ink
        </a>
      </div>
    </nav>
  );
}
