import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/svgs/logo.svg";
import { CgMenuRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { UserData } from "../data/UserData";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const { resumeUrl } = UserData;

  const handleOutsideClick = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="fixed top-0 z-50 flex items-center justify-between w-full lg:px-28 pt-2 ml-2 transition-all text-base sm:px-4">
      <div>
        <img
          className="md:h-[90px] md:w-[90px] h-[50px] w-[50px] bg-cover bg-no-repeat"
          src={logo}
          alt="logo"
        />
      </div>
      {/* desktop view */}
      <nav className="lg:block hidden">
        <div className="flex flex-row space-x-4 gap-6 cursor-pointer items-center">
          <NavLink
            className={({ isActive }) =>
              ` ${
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
              ` ${
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
              ` ${
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
                  : "text-gray-900 font-medium"
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
              className="w-[120px] button-UI text-gray-900 hover:text-white font-bold py-1.5 px-4 rounded-lg tracking-wider shadow-xl"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile view */}
      {mobileMenuOpen && (
        <nav
          ref={menuRef}
          className="lg:hidden absolute top-full z-50 left-0 w-full shadow-lg pb-2 bg-gradient-to-tr from-slate-700/20 to-slate-100/20"
        >
          <div className="flex flex-col gap-6 items-center">
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-900 font-medium"
                } cursor-pointer`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-900 font-medium"
                } cursor-pointer`
              }
              to="projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-900 font-medium"
                } cursor-pointer`
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
                    : "text-gray-900 font-medium"
                } cursor-pointer`
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
                className="w-[120px] button-UI text-gray-900 hover:text-white font-bold py-1.5 px-4 rounded-lg tracking-wider shadow-xl cursor-pointer"
              >
                Resume
              </button>
            </div>
          </div>
        </nav>
      )}

      <div className="lg:hidden block">
        <button
          ref={buttonRef}
          className="block mr-5 hover:text-gray-900 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <CgMenuRight size={32} />
        </button>
      </div>
    </header>
  );
}

export default Header;
