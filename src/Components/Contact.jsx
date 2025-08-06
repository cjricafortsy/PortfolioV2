import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_698jtmh", // Your EmailJS service ID
        "template_nol23ge", // Your EmailJS template ID
        form.current,
        "A2sqxU8rPwDuGv2Sp" // Your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <div className="bg-bgcolor w-full py-40">
      <ToastContainer position="top-center" autoClose={3000} />

      <h1 className="text-center text-white font-bold text-[2rem] md:text-[3rem] xl:text-[4rem] mb-20">
        CONTACT <span className="text-textcolor">ME</span>
      </h1>

      <form ref={form} onSubmit={sendEmail} className="max-w-6xl mx-auto px-5 grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            required
            className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg focus:outline-none"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
            className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            required
            className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg focus:outline-none"
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-6 text-xl bg-[#323946] text-white rounded-lg focus:outline-none"
        ></textarea>

        <div className="text-center mt-6">
          <input
            type="submit"
            value="Send Message"
            className="text-white text-lg md:text-xl py-4 px-10 rounded-full border-2 border-textcolor
              shadow-[0px_0px_8px_2px_rgba(22,90,95,0.5),0px_0px_15px_4px_rgba(22,90,95,0.3)]
              bg-textcolor hover:text-bgcolor duration-500 cursor-pointer hover:scale-110 active:scale-100"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
