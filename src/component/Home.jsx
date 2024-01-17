import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-white ">
      {/* bg-[#0a192f]  */}
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#4c4c4d]">
          Apoorv Kumar Gupta
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm Frontend Developer
        </h2>
        <p className="text-black text-xl py-5 max-w-[700px]">
          I'am a frontend developer specializing i building (and occasionally
          designing) exceptional digital experience. Currently, I'am focused on
          building responsive web application
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#8892b0] bg-[#70f5a3] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
