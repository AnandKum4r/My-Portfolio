import ProfileLogo from "../assets/images/name-logo.svg?react";
import RightArrow from "../assets/icons/right-arrow.svg?react";

const Profile = () => {
  return (
    <>
      <div className="w-full px-4 max-w-screen-xl mx-auto">
        <ProfileLogo className="absolute top-0 left-1/2 -translate-y-1/5 -translate-x-[150px] w-[300px] sm:w-[350px] md:w-[450px] h-auto" />
        <div className="relative ml-4 md:ml-12">
          <h1 className="text-4xl md:text-[65px] font-['Spartan'] mr-12">
            Anand Kumar
          </h1>
          <p className="font-['Merriweather'] italic my-4 md:my-5">
            MERN Stack Developer
          </p>
          <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
            About Me
            <RightArrow className="absolute top-1/2 -translate-y-1/2 -right-7 group:hover:-right-8" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
