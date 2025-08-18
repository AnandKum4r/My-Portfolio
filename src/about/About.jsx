import MyPhoto from "../assets/images/MyPhoto.jpg";
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";

const About = () => {
  return (
    <>
      <div className="flex justify-center relative  after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
        <a
          href="#about"
          className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-200 group mb-20"
        >
          About Me
          <BottomArrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-8 transition-all duration-300 group-hover:top-6" />
        </a>
      </div>

      <section
        id="about"
        className="max-w-screen-xl scroll-mt-23 mx-auto px-4 relative pb-8 sm:pb-10"
      >
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          About Me
        </h2>

        {/* Profile photo and description */}
        <div className="flex flex-col md:flex-row items-center pt-6 gap-10">
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
              <span className="text-blue-400 font-semibold">Anand Kumar</span> —
              a B.Tech IT graduate from Madan Mohan Malaviya University of
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
              to build responsive, user-friendly web applications. I’ve
              developed multiple projects like an Employee Management System,
              Food Delivery App, and Quiz App — all focused on enhancing the
              user experience and UI responsiveness.
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
              🚀 I’m open to opportunities where I can learn, grow, and
              contribute to impactful projects that make a difference. Let’s
              connect and build something great together!
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
    </>
  );
};

export default About;
