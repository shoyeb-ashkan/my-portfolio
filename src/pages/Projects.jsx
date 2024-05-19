import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

function Projects() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto mb-24 sm:mb-0 md:h-screen">
      <div>
        <p className="w-[50%] pb-10 mx-auto mt-32 text-2xl lg:text-3xl font-poppins text-gray-900 pt-8 tracking-wider text-center font-poppins">
          Projects
        </p>
      </div>
      <div className="w-[90%] mx-auto mb-2 sm:mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Cards />
      </div>
      <div className="mx-auto w-[90%]">
        <p className="flex item-center gap-2 text-gray-900 leading-tight font-semibold cursor-pointer">
          <span
            className="relative group font-poppins"
            onClick={() => {
              navigate("/projectlist");
            }}
          >
            <span>View Full Project Archive</span>
            <span className="absolute left-0 bottom-0 top-6 w-full h-[2px] bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </span>
          <FaLocationArrow />
        </p>
      </div>
    </div>
  );
}

export default Projects;
