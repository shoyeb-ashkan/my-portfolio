import React from "react";
import { UserData } from "../data/UserData";
import { skills, skillsImage } from "../data/Skills";
import Marquee from "react-fast-marquee";
import AboutImage from "../assets/images/AboutImage.png";
function About() {
  const { about } = UserData;

  return (
    <div
      className={
        "w-full h-auto mb-16 sm:mb-0 lg:h-[78vh] " +
        `${window.innerHeight === 730 ? "" : "lg:h-[730px]"}`
      }
    >
      <div className="flex md:items-center mt-32 flex-col justify-between bg-transparent rounded-lg shadow-lg p-4 w-[90%] mx-auto md:flex-row">
        <div className="flex flex-col w-full md:w-[50%]">
          <p className="text2xl font-semibold text-gray-900 tracking-wide pb-2">
            About Me
          </p>
          <p className="text-sm lg:text-base">{about}</p>
          <div className="mt-8">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnClick={true}
              direction="left"
              play={true}
              delay={0}
            >
              {skills.map((skill, i) => (
                <div
                  className="w-24 h-24 flex items-center justify-center text-gray-900 flex-col gap-2 ml-4"
                  key={i}
                >
                  <img
                    className="w-[60px] h-[50px] bg-contain bg-no-repeat"
                    src={skillsImage(skill)}
                    alt={skill}
                  />
                  <p>{skill}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <img src={AboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
