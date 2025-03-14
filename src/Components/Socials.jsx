import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <a
        href="https://www.facebook.com/tonghie.syjr?mibextid=ZbWKwL"
        target="_blank"
        className="text-textcolor md:text-[2.5rem] lg:text-[4rem] xl:text-[1.8rem] 2xl:text-[2.3rem] mt-5 rounded-full lg:p-5 2xl:p-4 p-3 border-2 border-textcolor 
                    shadow-[0px_0px_8px_2px_rgba(22,90,95,0.5),0px_0px_15px_4px_rgba(22,90,95,0.3)] hover:bg-textcolor hover:text-bgcolor duration-500 hover:scale-125 active:scale-100"
      >
        <span>
          <FaFacebookF />
        </span>
      </a>
      <a
        href="https://www.instagram.com/cjricafortsy/"
        target="_blank"
        className="text-textcolor md:text-[2.5rem] lg:text-[4rem] xl:text-[1.8rem] 2xl:text-[2.3rem] mt-5 rounded-full lg:p-5 2xl:p-4 p-3 border-2 border-textcolor 
                    shadow-[0px_0px_8px_2px_rgba(22,90,95,0.5),0px_0px_15px_4px_rgba(22,90,95,0.3)] hover:bg-textcolor hover:text-bgcolor duration-500 hover:scale-125 active:scale-100"
      >
        <span>
          <AiFillInstagram />
        </span>
      </a>

      <a
        href="https://github.com/cjricafortsy"
        target="_blank"
        className="text-textcolor md:text-[2.5rem] lg:text-[4rem] xl:text-[1.8rem] 2xl:text-[2.3rem] mt-5 rounded-full lg:p-5 2xl:p-4 p-3 border-2 border-textcolor 
                    shadow-[0px_0px_8px_2px_rgba(22,90,95,0.5),0px_0px_15px_4px_rgba(22,90,95,0.3)] hover:bg-textcolor hover:text-bgcolor duration-500 hover:scale-125 active:scale-100"
      >
        <span>
          <IoLogoGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/tonghie-sy-61a167280/"
        target="_blank"
        className="text-textcolor md:text-[2.5rem] lg:text-[4rem] xl:text-[1.8rem] 2xl:text-[2.3rem] mt-5 rounded-full lg:p-5 2xl:p-4 p-3 border-2 border-textcolor 
                    shadow-[0px_0px_8px_2px_rgba(22,90,95,0.5),0px_0px_15px_4px_rgba(22,90,95,0.3)] hover:bg-textcolor hover:text-bgcolor duration-500 hover:scale-125 active:scale-100"
      >
        <span>
          <FaLinkedinIn />
        </span>
      </a>
    </div>
  );
};

export default Socials;
