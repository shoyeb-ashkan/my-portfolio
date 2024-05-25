import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { UserData } from "../data/UserData";

import developerImage from "../assets/images/imagedeveloper.png";
import AutoWriteText from "../components/AutoWriteText";
import { Link } from "react-router-dom";

function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcon = {
    FaLinkedinIn: FaLinkedinIn,
    AiFillGithub: AiFillGithub,
    FaXTwitter: FaXTwitter,
    // AiFillInstagram: AiFillInstagram,
  };
  return (
    <div className="w-full mb-24 min-h-[540px] lg:h-[70vh]">
      <div className=" w-[90%] flex items-center flex-col lg:justify-between mt-32 sm:flex-row mx-auto lg:w-[80%]">
        <div className="w-full">
          <h2 className="text-3xl font-semibold lg:text-3xl text-gray-900 leading-tight">
            Hello <span className="wave">👋</span>
          </h2>
          <h2 className="pt-2 text-3xl font-semibold text-gray-900 leading-tight">
            I'm {UserData.name}
          </h2>
          {/* typwriter effect needs to be add */}
          <AutoWriteText />

          {/* social media Icon will sbe shown here */}
          <div className="flex mt-4 gap-8 lg:gap-0">
            {socialMedia.map((data) => {
              const IconComponent = socialMediaIcon[data.icon];
              return (
                <button
                  className={
                    "flex items-center justify-center lg:w-24 lg:h-12 bg-transparent border-none rounded-lg hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:opacity-80 "
                  }
                  key={data.socialMediaName}
                  onClick={() => window.open(data.url)}
                >
                  <IconComponent className="text-[30px]" />
                </button>
              );
            })}
          </div>
        </div>

        {/* part 2 Image  */}
        <div className="mt-12">
          <img
            className="bg-cover bg-no-repeat bg-center lg:w-[600px] "
            src={developerImage}
            alt=""
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center">
        <Link
          to="contact"
          className=" inline-block button-UI rounded-lg px-3 py-2 tracking-wider font-semibold text-gray-900 mr-2 my-2 mt-5 shadow-lg hover:text-white duration-300"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
