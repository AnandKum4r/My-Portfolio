import MyPhoto from "../assets/images/MyPhoto.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0f1123] text-white mx-4 py-10 px-4 sm:px-8 md:px-16 lg:px-24 rounded-2xl border border-[#444] drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] transition duration-300"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-[#cccccc]">
        About Me
      </h2>

      {/* Profile photo and description */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={MyPhoto}
            alt="Profile"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-blue-500 shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="text-center md:text-left flex-1">
          <p className="text-[#cccccc] text-base sm:text-lg leading-relaxed">
            Hello! I’m{" "}
            <span className="text-blue-400 font-semibold">Anand Kumar</span>, a
            passionate Frontend Developer from India. I specialize in building
            modern web interfaces using
            <span className="text-blue-400">
              {" "}
              React.js, JavaScript, HTML,
            </span>{" "}
            and <span className="text-blue-400">CSS</span>. I'm currently
            exploring new technologies and preparing for developer interviews to
            kickstart my career.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#181b32] hover:bg-[#1f2342] p-4 rounded-xl text-center transition duration-200">
              <p className="text-sm text-gray-400">Experience</p>
              <p className="text-white font-semibold">Fresher</p>
            </div>
            <div className="bg-[#181b32] hover:bg-[#1f2342] p-4 rounded-xl text-center transition duration-200">
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white font-semibold">Delhi, India</p>
            </div>
            <div className="bg-[#181b32] hover:bg-[#1f2342] p-4 rounded-xl text-center transition duration-200">
              <p className="text-sm text-gray-400">Availability</p>
              <p className="text-white font-semibold">Immediate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
