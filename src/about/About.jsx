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
            👋 Hi, I’m{" "}
            <span className="text-blue-400 font-semibold">Anand Kumar</span> — a
            B.Tech IT graduate from Madan Mohan Malaviya University of
            Technology, Gorakhpur and a passionate Full Stack Developer with
            hands-on experience in the MERN stack:{" "}
            <span className="text-blue-400">
              MongoDB, Express.js, React.js, and Node.js
            </span>
            .
            <br />
            <br />
            💻 I specialize in frontend development, using{" "}
            <span className="text-blue-400">
              React.js, HTML, CSS, and JavaScript
            </span>{" "}
            to build responsive, user-friendly web applications. I’ve developed
            multiple projects like an Employee Management System, Food
            Delivery App, and Quiz App — all focused on enhancing the user
            experience and UI responsiveness.
            <br />
            <br />
            🛠️ I’m also skilled in backend basics using{" "}
            <span className="text-blue-400">Node.js</span> and{" "}
            <span className="text-blue-400">Express.js</span>, along with both
            relational (<span className="text-blue-400">MySQL</span>) and
            non-relational (<span className="text-blue-400">MongoDB</span>)
            databases.
            <br />
            <br />
            🚀 I’m open to opportunities where I can learn, grow, and contribute
            to impactful projects that make a difference. Let’s connect and
            build something great together!
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
