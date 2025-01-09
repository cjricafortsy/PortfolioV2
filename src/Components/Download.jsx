import React from "react";

function Download() {
  return (
    <a
      href="/assets/CV.pdf" // Correct file path relative to the public folder
      download="CV.pdf" // Optional: you can specify a custom filename if needed
      className="text-white text-[1rem] mt-5 rounded-full py-4 px-10 border-2 border-textcolor 
                 shadow-[0px_0px_8px_2px_rgba(22,90,95,0.5),0px_0px_15px_4px_rgba(22,90,95,0.3)] 
                 bg-textcolor hover:text-bgcolor duration-500 cursor-pointer"
    >
      Download
    </a>
  );
}

export default Download;
