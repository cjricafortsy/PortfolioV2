import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import the Swiper styles
import iHubImage from "../assets/iHub.png";
import outlandImage from "../assets/Outland.png";
import bteWebImage from "../assets/BTEWeb.png";
import btePortalImage from "../assets/BTEPortal.png";

// Main Project Component with Swipeable Cards
const Project = () => {
  // Reference for Swiper instance
  const swiperRef = useRef(null);

  return (
    <div className="py-[5rem] w-full bg-bgcolor">
      {/* Title at the top */}
      <h1 className="text-center text-white text-[3.5rem] font-bold mb-8">
        MY <span className="text-textcolor">PROJECTS</span>
      </h1>

      <Swiper
        ref={swiperRef} // Reference to control the Swiper instance
        spaceBetween={1} // Space between slides
        slidesPerView={1} // Show one card at a time
        loop={true} // Enable looping for continuous swipe
        pagination={{ clickable: true }} // Pagination dots
        autoplay={{
          delay: 1000, // Delay between slides (5 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }} // Autoplay configuration
        className="swiper-container"
      >
        {/* First SwiperSlide */}
        <SwiperSlide>
          <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg bg-white max-w-[80rem] max-h-[50rem]">
            <img className="w-full object-cover" src={iHubImage} alt="iHub" />
            <div className="px-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-800">iHub</h3>
              <p className="text-gray-600 text-sm mt-2">
                During our OJT at Mnleistung, we proudly developed Ihub, also
                known as Intern Hub, an innovative internship management
                platform.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Second SwiperSlide */}
        <SwiperSlide>
          <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg bg-white max-w-[80rem] max-h-[50rem]">
            <img
              className="w-full object-cover"
              src={outlandImage}
              alt="Outland"
            />
            <div className="px-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-800">Outland</h3>
              <p className="text-gray-600 text-sm mt-2">
                Outland is an exhilarating survival game crafted by our team as
                part of our Capstone project at STI.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Additional slides */}
        <SwiperSlide>
          <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg bg-white max-w-[80rem] max-h-[50rem]">
            <img
              className="w-full object-cover"
              src={bteWebImage}
              alt="BTE Web"
            />
            <div className="px-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Bigtime Empire Corp. Website
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                BigTime Empire Corp's website design showcases the diverse
                portfolio of brands managed by the company, highlighting their
                innovation, quality, and impact across various industries.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg bg-white max-w-[80rem] max-h-[50rem]">
            <img
              className="w-full object-cover"
              src={btePortalImage}
              alt="BTE Portal"
            />
            <div className="px-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Bigtime Empire Corp. Portal
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                BigTime Portal is a comprehensive platform that houses the
                Employee Information Management System (EIMS) for securely
                storing and managing employee data at BigTime Empire Corp, with
                an evolving HRIS module currently under development.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
