import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";
import { SiExcalidraw } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { AiOutlineDotNet } from "react-icons/ai";

function techstack() {
  const Icon = [
    { id: 1, icon: <FaFigma />, name: "Figma" },
    { id: 2, icon: <FaHtml5 />, name: "HTML 5" },
    { id: 3, icon: <FaCss3 />, name: "CSS 3" },
    { id: 4, icon: <IoLogoJavascript />, name: "JavaScript" },
    { id: 5, icon: <FaBootstrap />, name: "Bootstrap 5" },
    { id: 6, icon: <FaReact />, name: "React" },
    { id: 7, icon: <RiTailwindCssFill />, name: "TailwindCSS" },
    { id: 8, icon: <SiExcalidraw />, name: "Excalidraw" },
    { id: 9, icon: <PiFileSql />, name: "MSSQL" },
    { id: 10, icon: <PiFileCSharp />, name: "C#" },
    { id: 11, icon: <AiOutlineDotNet />, name: "ASP.Net" },
  ];
  return (
    <div className="flex justify-center items-center bg-bgcolor py-32">
      <div className="flex flex-col justify-center items-center lg:max-w-[1240px] 2xl:max-w-[1600px] mx-auto my-[8rem]">
        <h1 className="text-white xl:text-[3.5rem] lg:text-[3rem] md:text-[3rem] text-[1.5rem] font-bold">
          TECHNOLOGY <span className="text-textcolor">STACK</span>
        </h1>
        <div className="flex flex-wrap items-center justify-evenly mt-32 max-w-[90rem] lg:gap-[10rem] md:gap-[8rem] gap-[3rem] md:mx-16 mx-4">
          {Icon.map((index) => (
            <div
              id={index.id}
              className="flex flex-col justify-center items-center"
              key={index.id}
            >
              <span className="Techicon xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[2rem] text-white">
                {index.icon}
              </span>
              <span className="Icontext md:text-[1.5rem] text-[1rem] text-white mt-5">
                {index.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default techstack;
