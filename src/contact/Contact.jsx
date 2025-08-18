import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rjp3bio",
        "template_fii4cj2",
        form.current,
        "WAp4TXPp-4yNMQ5BO"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ❌", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <>
      <div className="flex justify-center relative after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
        <a
          href="#contact"
          className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-200 group mb-20"
        >
          Contact Me
          <BottomArrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-8 transition-all duration-300 group-hover:top-6" />
        </a>
      </div>

      <section
        id="contact"
        className="max-w-screen-xl scroll-mt-23 mx-auto px-4 relative pb-8 sm:pb-10"
      >
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Contact Me
        </h2>
        <ToastContainer />

        {/* Layout */}
        <div className="flex pt-6 flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 space-y-6 bg-[#181b32] p-8 rounded-2xl border border-[#2c2f4a] shadow-md shadow-purple-500/10 hover:shadow-purple-500/30 transition duration-300"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-[#0f1123] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-[#0f1123] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-[#0f1123] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-101 shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40"
            >
              Send Message ✉️
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
