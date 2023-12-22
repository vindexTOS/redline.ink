import React, { FC, useRef } from "react";
import { ServicesType } from "./Services";
import useOutClick from "../../hooks/useOutClick";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

type ServiceProptype = {
  data?: ServicesType[];
  serviceID?: string;
  setOpenSingleService: React.Dispatch<React.SetStateAction<string>>;
};
const SingleService: FC<ServiceProptype> = ({
  data,
  serviceID,
  setOpenSingleService,
}) => {
  const FoundedData = data?.find((val: ServicesType) => val.id == serviceID);
  const ref = useRef(null);
  const closeSingle = () => {
    setOpenSingleService("");
  };
  useOutClick(ref, closeSingle);

  if (!FoundedData) {
    return <div>NOT FOUND</div>;
  }
  const {
    title,
    titleOne,
    titleTwo,
    decOne,
    decTwo,
    priceRange,
    icon,
    description,
    id,
    timeLine,
  } = FoundedData || {};
  return (
    <div className="backdrop-blur-sm w-full h-full flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50">
      <div
        ref={ref}
        className="px-4 py-2 flex flex-col gap-4 rounded-md bg-black/80 boxShaddow max-w-screen-md w-full relative"
      >
        <MdOutlineCancel
          onClick={() => closeSingle()}
          className="text-red-600 text-[2rem] absolute right-2 "
        />

        <h1 className="text-xl md:text-2xl font-bold mb-2 text-white">
          {title}
        </h1>

        <div className="flex flex-col max_smm1:flex-row  justify-between px-4   gap-4 mb-4">
          <img
            src={icon}
            alt={title}
            className="w-full md:w-[200px] h-auto max_smm1:w-[100px]"
          />
          <div className="flex flex-col   items-center gap-4">
            <h1 className="text-white text-[1rem] max_smm1:text-[14px] md:text-[1.2rem]">
              დაგვიკავშირდით
            </h1>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center text-[1rem]   max_smm1:text-[14px] md:text-[1.2rem]">
                <FaEnvelope className="text-gray-600 mr-2" />
                <a
                  href="mailto:info@redline.ink"
                  className="text-blue-500 hover:underline"
                >
                  info@redline.ink
                </a>
              </div>
              <div className="flex items-center text-[1rem]  max_smm1:text-[14px] md:text-[1.2rem]">
                <FaFacebook className="text-blue-700 mr-2" />
                <a
                  href="https://www.facebook.com/profile.php?id=61553239725559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Redline - რედლაინი
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-[1rem] md:text-[1.2rem]  max_smm1:text-[14px]">
          {description}
        </p>

        <div className="mb-2 md:mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-white  max_smm1:text-[14px]">
            {titleOne}
          </h2>
          <p className="text-gray-400  max_smm1:text-[14px]">{decOne}</p>
        </div>
        <div className="mb-2 md:mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-white  max_smm1:text-[14px]">
            {titleTwo}
          </h2>
          <p className="text-gray-400  max_smm1:text-[14px]">{decTwo}</p>
        </div>
        <div className="mb-2 md:mb-4  max_smm1:text-[14px]">
          <p className="flex gap-2  max_smm1:text-[14px] text-green-300 text-[1rem] md:text-[1.2rem]">
            Price Range:{" "}
            <span className="flex gap-2">
              {priceRange.map((val: string, index: number) => (
                <p key={index}>
                  ₾{val} {index >= 0 && index < 1 && "-"}
                </p>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
