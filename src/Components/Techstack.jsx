import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
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
    { id: 6, icon: <SiExcalidraw />, name: "Excalidraw" },
    { id: 7, icon: <PiFileSql />, name: "MSSQL" },
    { id: 8, icon: <PiFileCSharp />, name: "C#" },
    { id: 9, icon: <AiOutlineDotNet />, name: "ASP.Net" },
  ];
  return (
    <div className="flex justify-center items-center bg-bgcolor h-[100vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-[3.5rem] font-bold">
          TECHNOLOGY <span className="text-textcolor">STACK</span>
        </h1>
        <div className="flex flex-wrap flex-col 2xl:flex-row items-center  justify-evenly mt-32 max-w-[90rem] gap-[10rem]">
          {Icon.map((index) => (
            <div
              id={index.id}
              className="flex flex-col justify-center items-center"
            >
              <span className="text-[8rem]">{index.icon}</span>
              <span className="text-[1.5rem] text-white mt-5">
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
