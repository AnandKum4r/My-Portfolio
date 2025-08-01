import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0f1123] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 rounded-2xl border border-[#444] my-10 mx-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] transition duration-300"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-[#cccccc]">
        Contact Me
      </h2>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-2">Email</h4>
            <a
              href="mailto:anandkr.dev21@gmail.com"
              className="text-[#cccccc] hover:text-blue-300 transition"
            >
              anandkr.dev21@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              Location
            </h4>
            <p className="text-[#cccccc]">Delhi, India</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              LinkedIn
            </h4>
            <a
              href="https://linkedin.com/in/AnandKum4r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              https://linkedin.com/in/AnandKum4r
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              Telgram
            </h4>
            <a
              href="https://t.me/AnandKum4r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              https://t.me/AnandKum4r
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex-1 space-y-6">
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              className="w-full bg-[#181b32] border border-[#333] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              className="w-full bg-[#181b32] border border-[#333] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Message</label>
            <textarea
              rows="4"
              className="w-full bg-[#181b32] border border-[#333] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
