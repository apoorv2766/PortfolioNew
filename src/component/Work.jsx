import React from "react";
import myproject from "../assets/myproject.png";
import tictactoe from "../assets/tictactoe.png";
import quoteapi from "../assets/quoteapi.png";
import todo from "../assets/todo.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#5e6064] w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 pt-12 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-4">//Check out some of my recent works</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* grid view */}
          <div
            style={{ backgroundImage: `url(${myproject})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traking-wider">
                ReactJS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://storeathome.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/apoorv2766">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid view */}
          <div
            style={{ backgroundImage: `url(${tictactoe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traking-wider">
                ReactJS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://tictactoemine.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/apoorv2766">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid view */}
          <div
            style={{ backgroundImage: `url(${quoteapi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traking-wider">
                ReactJS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://randomquotegeneratorusingapi.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/apoorv2766">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid view */}
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traking-wider">
                ReactJS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://todocontextlocalusingvite.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/apoorv2766">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
