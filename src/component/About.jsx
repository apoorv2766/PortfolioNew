import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 b-">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'am Apoorv,nice to meet you.Please take a look around,</p>
          </div>
          <div>
            <p>
              {" "}
              I am passionate about building execellent software that improve
              the lives of those around me . I specialize in creating software .
              What would you do if you had a software expert avaliable at your
              fingertip?
            </p>
            <div className="flex gap-5 mt-5 ">
              <div>
                <a
                  className=" flex justify-between items-center w-full text-gray-300"
                  href="https://www.linkedin.com/in/apoorv27"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
              <div>
                <a
                  className=" flex justify-between items-center w-full text-gray-300"
                  href="https://www.github.com/apoorv2766"
                >
                  <FaGithub size={30} />
                </a>
              </div>
              <div>
                <a
                  className=" flex justify-between items-center w-full text-gray-300"
                  href="https://www.outlook.com/apoorv2766"
                >
                  <HiOutlineMail size={30} />
                </a>
              </div>
              <div>
                <a
                  className=" flex justify-between items-center w-full text-gray-300"
                  href="https://www.dropbox.com/scl/fi/9f16mm2622a0shbmp8mu8/latest_-resume.pdf_2.pdf?rlkey=dg3khxsbq5az99w8ca6x1ls10&dl=0"
                >
                  <BsFillPersonLinesFill size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
