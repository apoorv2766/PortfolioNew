import React, { useState } from "react";
import logo from "../assets/AG.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => setnav(!nav);

  return (
    <>
      <div class="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[black] text-gray-300">
        <div>
          <img
            src={logo}
            alt="my logo"
            style={{ width: "80px", height: "60px" }}
          />
        </div>
        {/* menu */}
        <ul className="hidden md:flex text-xl">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/* hamburger */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* social icon  */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className=" flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/apoorv27"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className=" flex justify-between items-center w-full text-gray-300"
                href="https://www.github.com/apoorv2766"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className=" flex justify-between items-center w-full text-gray-300"
                href="https://www.outlook.com/apoorv2766"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                className=" flex justify-between items-center w-full text-gray-300"
                href="https://www.dropbox.com/scl/fi/nge68uprbzs9ziue2c4nb/latest_-resume.pdf.pdf?rlkey=6rkclrxwuwf0d51btitcgwm9u&dl=0"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
