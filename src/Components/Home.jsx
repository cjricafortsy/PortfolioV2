import React from "react";
import Dev from "../assets/Dev.svg";
import Typewriter from "typewriter-effect";
import "boxicons";
import Socials from "./Socials";
import Download from "./Download";

const Home = () => {
  return (
    <div className="flex justify-between items-center w-full bg-bgcolor h-[100vh]">
      <div className="flex xl:flex-row xl:justify-between items-center w-full max-w-[1240px] mx-auto flex-col">
        <div className="flex flex-col xl:items-start w-full justify-center items-center">
          <span className=" text-white md:text-[3rem] lg:text-[3rem] xl:text-[2rem] font-bold text-[1.3rem]">
            Hi!
          </span>
          <span className=" text-white md:text-[3rem] lg:text-[5rem] xl:text-[3rem] font-bold xl:mt-[-15px] text-[1.5rem]">
            I'm Tonghie R. Sy Jr.
          </span>
          <div className="flex flex-row items-center justify-center md:text-[3rem] lg:text-[4.5rem] xl:text-[2rem] font-bold gap-2 text-[1.5rem]">
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
          className="Pic flex items-center mt-[5rem] md:w-[30rem] lg:w-[50rem] xl:w-[40rem] w-[20rem]"
        />
      </div>
    </div>
  );
};

export default Home;
