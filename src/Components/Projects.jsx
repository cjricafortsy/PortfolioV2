import React, { useRef } from "react";
import iHubImage from "../assets/iHub.png";
import outlandImage from "../assets/Outland.png";
import bteWebImage from "../assets/BTEWeb.png";
import btePortalImage from "../assets/BTEPortal.png";
import prWebVideo from "../assets/PRwebsite.gif";
import HRIS from "../assets/HRIS.png";

// Image data array
const projects = [
  {
    id: 1,
    title: "Outland",
    image: outlandImage,
    description:
      "Outland is an exhilarating survival game crafted by our team as part of our Capstone project at STI.",
  },
  {
    id: 2,
    title: "iHub",
    image: iHubImage,
    description:
      "During our OJT at Mnleistung, we proudly developed Ihub, also known as Intern Hub, an innovative internship management platform.",
  },
  {
    id: 3,
    title: "Bigtime Empire Corp. Website",
    image: bteWebImage,
    description:
      "Bigtime Empiroce Corp’s website features its food and beverage brands, with job applications and franchising opportunities.",
  },
  {
    id: 4,
    title: "BTE Portal",
    image: btePortalImage,
    description:
      "The Bigtime Empire Corp Portal (BTE Portal) is an HRIS designed for employees to easily access and manage company-related information.",
  },
  {
    id: 5,
    title: "Pares Retiro Website",
    image: prWebVideo,
    description:
      "Pares Retiro is a Bigtime Empire Corp-owned brand that specializes in Filipino dish 'Pares' and other delicious offerings.",
  },
  {
    id: 6,
    title: "HRIS",
    image: HRIS,
    description:
      "From BTE Portal to HRIS new UI and has Payroll Fucntions "
  },
];

const Project = () => {
  return (
    <div className="bg-bgcolor w-full">
      <h1 className="text-center text-white xl:text-[4rem] md:text-[3rem] text-[2rem] mb-[5rem] font-bold">
        MY <span className="text-textcolor">PROJECTS</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 w-full mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="xl:w-auto md:w-[20rem] w-[20rem] rounded-xl overflow-hidden shadow-md relative group hover:scale-105 transistion-transform duration-300"
          >
            <img
              className="xl:w-full xl:h-[18rem] group-hover:scale-110 transition-transform duration-500 object-cover"
              src={project.image}
              alt={project.title}
            />
            {/* Curtain effect overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-textcolor to-transparent group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out flex justify-center items-center p-4">
              <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="xl:text-[2rem] text-[1.2rem] font-bold">
                  {project.title}
                </h2>
                <p className="xl:text-[1.2rem] text-sm mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
