import React from "react";
import Dev from "../assets/Dev.svg";
import Typewriter from "typewriter-effect";
import "boxicons";
import Socials from "./Socials";
import Download from "./Download";

const Home = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-bgcolor h-[100vh]">
      <div className="flex flex-row justify-between items-center w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col items-start w-full">
          <span className=" text-white text-[2rem] font-bold">Hi!</span>
          <span className=" text-white text-[3rem] font-bold mt-[-15px]">
            I'm Tonghie R. Sy Jr.
          </span>
          <div className="flex flex-row items-center justify-center text-[2rem] font-bold gap-2">
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
          className="Pic flex items-center mt-[5rem] w-[40rem]"
        />
      </div>
    </div>
  );
};

export default Home;
