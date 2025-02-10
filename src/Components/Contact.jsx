import React from "react";

const contact = () => {
  return (
    <div className="bg-bgcolor w-full">
      <div className="pt-[20rem] pb-20">
        <h1 className="text-center text-white xl:text-[4rem] md:text-[3rem] text-[2rem] mb-[5rem] font-bold">
          CONTACT <span className="text-textcolor">ME</span>
        </h1>

        <form className="max-w-6xl mx-auto text-center px-5 pb-[5rem]">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 p-2">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg my-2 focus:outline-none"
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg my-2 focus:border-bg-textcolor focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 p-2">
              <input
                type="text"
                placeholder="Mobile Number"
                id="num"
                className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg my-2 focus:border-bg-textcolor focus:outline-none"
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <input
                type="text"
                placeholder="Subject"
                id="subj"
                className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg my-2 focus:border-bg-textcolor focus:outline-none"
              />
            </div>
          </div>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="xl:w-[98.6%] md:w-[98%] p-6 text-xl bg-[#323946] text-white rounded-lg my-2 focus:border-bg-textcolor focus:outline-none"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            id="btn_send"
            className="text-white md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.5rem] md:py-6 md:px-20 lg:py-[3rem] lg:px-[7rem] mt-5 rounded-full xl:py-4 xl:px-10 py-5 px-5 border-2 border-textcolor
               shadow-[0px_0px_8px_2px_rgba(22,90,95,0.5),0px_0px_15px_4px_rgba(22,90,95,0.3)] 
               bg-textcolor hover:text-bgcolor duration-500 cursor-pointer hover:scale-110 active:scale-100"
          />
        </form>
      </div>
    </div>
  );
};

export default contact;
