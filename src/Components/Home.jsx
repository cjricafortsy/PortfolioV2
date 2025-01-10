import React from "react";
import Dev from "../assets/Dev.svg";
import Typewriter from "typewriter-effect";
import "boxicons";
import Socials from "./Socials";
import Download from "./Download";
import Arrow from "../assets/Arrow.gif";

const Home = () => {
  return (
    <div className="flex flex-col justify-between relative items-center w-full bg-bgcolor h-[100vh]">
      <div>
        <div className="flex xl:flex-row xl:justify-between items-center w-full lg:max-w-[1240px] 2xl:max-w-[1600px] mx-auto flex-col my-[8rem]">
          <div className="flex flex-col xl:items-start w-full justify-center items-center">
            <span className=" text-white md:text-[3rem] lg:text-[3rem] xl:text-[2rem] 2xl:text-[2.5rem] font-bold text-[1.3rem]">
              Hi!
            </span>
            <span className=" text-white md:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold xl:mt-[-15px] text-[1.5rem]">
              I'm Tonghie R. Sy Jr.
            </span>
            <div className="flex flex-row items-center justify-center md:text-[3rem] 2xl:text-[3.5rem] lg:text-[4.5rem] xl:text-[2rem] font-bold gap-2 text-[1.5rem]">
              <span className="text-white">and I'm a</span>
              <span className="text-textcolor">
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Graphic Designer", "Editor"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <Socials></Socials>
            <Download></Download>
          </div>
          <img
            src={Dev}
            alt=""
            className="Pic flex items-center mt-[5rem] md:w-[30rem] lg:w-[50rem] xl:w-[40rem] 2xl:w-[70rem] w-[20rem]"
          />
        </div>
      </div>
      <img
        src={Arrow}
        alt=""
        className="flex items-center mix-blend-multiply w-[10rem] absolute bottom-0"
      />
    </div>
  );
};

export default Home;
