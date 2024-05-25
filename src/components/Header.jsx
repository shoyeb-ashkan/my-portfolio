import React, { useState } from "react";
import logo from "../assets/svgs/logo.svg";
import { CgMenuRight } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";
import { UserData } from "../data/UserData";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const { resumeUrl } = UserData;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    location.pathname !== "/projectlist" && (
      <header className="fixed top-0 z-50 flex items-center justify-between w-full lg:px-28 pt-2 transition-all text-base px-6">
        <div>
          <img
            className="md:h-[90px] md:w-[90px] h-[50px] w-[50px] bg-cover bg-no-repeat"
            src={logo}
            alt="logo"
          />
        </div>
        {/* desktop view */}
        <nav className="sm:block hidden">
          <div className="flex flex-row space-x-4 gap-6 cursor-pointer items-center">
            <NavLink
              className={({ isActive }) =>
                `duration-500 hover:underline underline-offset-4 hover:text-white ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-900 font-medium"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `duration-500 hover:underline underline-offset-4 hover:text-white ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-900 font-medium"
                }`
              }
              to="projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `duration-500 hover:underline underline-offset-4 hover:text-white ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-900 font-medium"
                }`
              }
              to="about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-900 font-medium duration-500 hover:underline underline-offset-4 hover:text-white"
                }`
              }
              to="contact"
            >
              Contact
            </NavLink>
            <div>
              <button
                onClick={() => {
                  window.open(resumeUrl);
                }}
                className="w-[120px] button-UI text-gray-900 hover:text-white font-bold py-1.5 px-4 rounded-lg tracking-wider shadow-xl duration-500 hover:underline underline-offset-4"
              >
                Resume
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile view */}
        {mobileMenuOpen && (
          <div>
            <nav className="sm:hidden absolute top-0 z-0 right-0 w-[200px] h-screen shadow-lg  bg-gradient-to-tr from-[#4158d0]/70 via-[#c850c0]/80 to-[#ffcc70]/90">
              <div className="flex mt-[70px] flex-col gap-8 items-center">
                <NavLink
                  className={({ isActive }) =>
                    ` hover:text-white ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-900 font-medium"
                    } cursor-pointer duration-500 hover:underline underline-offset-4`
                  }
                  onClick={toggleMobileMenu}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    ` hover:text-white ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-900 font-medium"
                    } cursor-pointer duration-500 hover:underline underline-offset-4`
                  }
                  onClick={toggleMobileMenu}
                  to="projects"
                >
                  Projects
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-white  ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-900 font-medium"
                    } cursor-pointer duration-500 hover:underline underline-offset-4`
                  }
                  onClick={toggleMobileMenu}
                  to="about"
                >
                  About
                </NavLink>
                <NavLink
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `hover:text-white  ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-900 font-medium"
                    } cursor-pointer duration-500 hover:underline underline-offset-4`
                  }
                  to="contact"
                >
                  Contact
                </NavLink>
                <div>
                  <button
                    onClick={() => {
                      window.open(resumeUrl);
                    }}
                    className="w-[120px] button-UI text-gray-900 hover:text-white font-bold py-1.5 px-4 rounded-lg tracking-wider shadow-xl cursor-pointer duration-500"
                  >
                    Resume
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}

        <div className="sm:hidden block">
          <button
            className="block mr-5 z-[1000] absolute top-2 right-2 hover:text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <CgMenuRight size={32} />
          </button>
        </div>
      </header>
    )
  );
}

export default Header;
