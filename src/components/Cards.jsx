import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProjectList } from "../data/ProjectList";
function Cards() {
  const location = useLocation();
  const [showFullDesc, setShowFullDesc] = useState(null);
  const isProjectPath = location.pathname === "/projects";
  const projectsToDisplay = isProjectPath
    ? ProjectList.projects.slice(0, 4)
    : ProjectList.projects;

  const toggleDesc = (index) => {
    setShowFullDesc(index === showFullDesc ? null : index);
  };

  return (
    <>
      {projectsToDisplay.map((project, index) => (
        <div
          key={index}
          className="rounded-lg bg-transparent mb-8 p-4 h-auto shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <h2 className="text-base lg:text-xl font-semibold mb-2 font-poppins cursor-pointer">
            {project.name}
          </h2>
          <p
            className="text-gray-900 text-sm font-poppins cursor-pointer"
            onClick={() => toggleDesc(index)}
          >
            {showFullDesc === index
              ? project.description
              : `${project.description.substring(0, 120)}...`}
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-wrap items-center justify-between mt-3 lg:mt-6">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="inline-block bg-transparent shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                >
                  {tech}
                </p>
              ))}
            </div>
            {!isProjectPath && project.demo && (
              <button
                onClick={() => window.open(project.demo)}
                className="inline-block bg-gradient-to-tr from-[#4158d0]/50 via-[#c850c0]/50 to-[#ffcc70]/50 rounded-lg px-3 py-1 text-sm font-semibold text-gray-900 mr-2 my-2 mt-5 h-[35px] w-[60px] hover:text-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
              >
                Demo
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
