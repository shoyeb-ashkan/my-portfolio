import React from "react";
import mobile from "../assets/svgs/mobile.svg";
import email from "../assets/svgs/email.svg";
import location from "../assets/svgs/location.svg";
import calendar from "../assets/svgs/calendar.svg";
import Email from "../components/Email";

function Contact() {
  return (
    <div className={"w-full mb-40 lg:mb-8 md:h-screen flex flex-col items-center justify-center "+`${window.innerHeight===730?'':'lg:h-[730px]'}` }>
      <div className="shadow-lg rounded-lg mt-32 h-auto pb-10 w-[90%]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="pt-12 text-3xl lg:text-5xl text-gray-900 pb-6 tracking-wide">
            Get In Touch
          </h2>
          <p className="lg:w-[50%] px-2 mx-auto text-sm text-gray-900 pb-6 tracking-wider text-center font-poppins">
            I'd love to connect and explore exciting opportunities with you!
            Whether you have interesting projects, creative ideas, or just want
            to chat, please don't hesitate to reach out!
          </p>
        </div>
        <div className="w-[90%] lg:w-[80%] flex items-center flex-col md:flex-row mx-auto justify-between">
          {/* left side div */}
          <div className="pb-1 w-[40%]">
            {/* mobile */}
            <div className="flex flex-row ">
              <img
                className="w-[50px] m-2 mr-3 bg-opacity-20 bg-transparent border-none shadow-lg rounded-lg"
                src={mobile}
                alt=""
              />
              <div>
                <h2 className="text-sm mt-2">Phone</h2>
                <span className="text-[12px] font-medium">+91 8600491202</span>
              </div>
            </div>
            {/* email */}
            <div className="flex flex-row ">
              <img
                className="w-[50px] m-2 p-2 mr-3 bg-opacity-20 bg-transparent border-none shadow-lg rounded-lg"
                src={email}
                alt=""
              />
              <div>
                <h2 className="text-sm mt-2">Email</h2>
                <span className="text-[12px] font-medium">
                  shoyebashkan999@gmail.com
                </span>
              </div>
            </div>

            {/* location  */}
            <div className="flex flex-row ">
              <img
                className="w-[50px] m-2 p-2 mr-3 bg-opacity-20 bg-transparent border-none shadow-lg rounded-lg"
                src={location}
                alt=""
              />
              <div>
                <h2 className="text-sm mt-2">Location</h2>
                <span className="text-[12px] font-medium">
                  Akola, Maharashtra
                </span>
              </div>
            </div>

            {/* Birthdate */}
            <div className="flex flex-row ">
              <img
                className="w-[50px] p-2 m-2 mr-3 bg-opacity-20 bg-transparent border-none shadow-lg rounded-lg"
                src={calendar}
                alt=""
              />
              <div>
                <h2 className="text-sm mt-2">BirthDate</h2>
                <span className="text-[12px] font-medium">
                  September 01, 1999
                </span>
              </div>
            </div>
          </div>

          {/* contact part for message */}
          <div className="w-[90%] md:w-[60%] mt-6 md:mt-0  border-slate-400 rounded-md shadow-lg backdrop-blur-sm bg-opacity-30 relative">
            <Email/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
