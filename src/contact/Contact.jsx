import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0f1123] to-[#1b1f3b] text-white py-16 px-4 mx-5 mb-10 sm:px-8 md:px-16 lg:px-24 rounded-3xl border border-[#2b2f4a] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition duration-500"
    >
      <ToastContainer />

      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Let’s Work Together
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Have a project in mind or just want to say hello? Fill out the form and
        I’ll get back to you as soon as possible.
      </p>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-12">

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
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40"
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
