import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#5e6064] text-gray-300">
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
                  href="https://www.dropbox.com/scl/fi/jb5k9vdjwqxv5ncfcqkqa/Apoorv_Gupta_Resume.pdf?rlkey=z08nvuffy7gjswyqqt3132pn0&st=ptk4s8hy&dl=0"
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
