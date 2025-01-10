import React from "react";

function Download() {
  return (
    <a
      href="/CV.pdf" // Path is relative to the public folder
      download="CV.pdf" // Optional: name the file on download
      className="text-white md:text-[2rem] xl:text-[1rem] 2xl:text-[1.5rem] md:py-6 md:px-20 lg:py-[3rem] lg:px-[7rem] mt-5 rounded-full xl:py-4 xl:px-10 py-2 px-5 border-2 border-textcolor 
             shadow-[0px_0px_8px_2px_rgba(22,90,95,0.5),0px_0px_15px_4px_rgba(22,90,95,0.3)] 
             bg-textcolor hover:text-bgcolor duration-500 cursor-pointer hover:scale-110 active:scale-50"
    >
      Download CV
    </a>
  );
}

export default Download;
