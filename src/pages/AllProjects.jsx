import React from "react";

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ProjectList } from "../data/ProjectList";
import Cards from "../components/Cards";

function AllProjects() {
  const navigate = useNavigate();
  const AllProjects = ProjectList.projects;
  return (
    <div className="w-full min-h-[96vh]">
      <div
        onClick={() => {
          navigate("/projects");
        }}
        className="absolute left-2 top-2 w-auto hover:text-white "
      >
        <div className="flex items-center gap-2">
          <FaArrowLeft />
          <span
            className="cursor-pointer text-md font-semibold"
            onClick={() => {
              navigate(-1);
            }}
          >
            Portfolio
          </span>
        </div>
      </div>
      <div className="flex pb-8 lg:p-4 pt-2 w-[90%] items-center justify-center mx-auto mt-7 lg:pt-4">
        <div className="text-center text-2xl  font-poppins">
          The project I worked on
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-2 sm:mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Cards />
      </div>
    </div>
  );
}

export default AllProjects;
