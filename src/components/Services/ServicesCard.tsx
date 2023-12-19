import React, { FC } from "react";
import "./Services.scss";
type CardPropTypes = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

const ServicesCard: FC<CardPropTypes> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="z-50 boxShaddow  p-3 flex flex-col items-center justify-around w-[400px] h-[500px] bg-black/40 rounded-lg">
      <img src={icon} className=" w-[220px] mb-4 mx-auto" alt="Icon" />

      <div className="flex  flex-col    justify-around gap-3">
        <h1 className="text-xl font-bold text-gray-400 mb-2 text-center">
          {title}
        </h1>

        <p className="text-gray-200 mb-1  text-center">{description}</p>

        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
          ვრცლად
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
