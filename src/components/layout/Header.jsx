import React, { useState } from "react";
import { NavLink } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import logo from "/src/assets/logo.png";
import Button from "../Button";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import Para from "../Para";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav
        className={`py-5 bg-transparent fixed top-0 left-0 w-full z-1000 hidden lg:block `}
      >
        <Container>
          <Flex className={"justify-between "}>
            <picture>
              <img src={logo} alt="logo" />
            </picture>
            <div className="">
              <ul className="flex items-center gap-x-4 text-center">
                {/* ================================================== */}
                <NavLink to={"/"}>
                  <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                    Home
                  </li>
                </NavLink>

                {/* ================================================== */}
                <NavLink to={"/categories"}>
                  <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                    Categories
                  </li>
                </NavLink>

                {/* ================================================== */}
                <NavLink to={"/destination"}>
                  <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                    Destination
                  </li>
                </NavLink>

                {/* ================================================== */}
                <li className="relative group">
                  <NavLink
                    to={"/blog"}
                    className={
                      "block py-4 font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200"
                    }
                  >
                    <Flex className={"gap-x-3"}>
                      {" "}
                      Blog
                      <FaCaretDown className="text-white" />
                    </Flex>
                  </NavLink>
                  <div className="absolute opacity-0 invisible left-0 top-full pl-9 py-6 bg-gray-400 group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="gap-x-4">
                      <NavLink to={"/*"}>
                        <li className=" py-3 w-[150px] text-left text-black text-[15px] hover:text-blue-500 transition-colors duration-200">
                          404
                        </li>
                      </NavLink>
                      <NavLink to={"/about"}>
                        <li className=" py-3 w-[150px] text-left text-black text-[15px] hover:text-blue-500 transition-colors duration-200">
                          About
                        </li>
                      </NavLink>
                      <NavLink to={"/about"}>
                        <li className=" py-3 w-[150px] text-left text-black text-[15px] hover:text-blue-500 transition-colors duration-200">
                          About
                        </li>
                      </NavLink>
                      <NavLink to={"/about"}>
                        <li className=" py-3 w-[150px] text-left text-black text-[15px] hover:text-blue-500 transition-colors duration-200">
                          About
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </li>

                {/* ================================================== */}
                <li className="relative group">
                  <NavLink
                    to={"/pages"}
                    className={
                      "block py-4 font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200"
                    }
                  >
                    <Flex className={"gap-x-3"}>
                      {" "}
                      Pages <FaCaretDown className="text-white" />
                    </Flex>
                  </NavLink>
                  <div className="absolute opacity-0 invisible left-0 top-full pl-9 py-6 bg-gray-400 group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="gap-x-4">
                      <NavLink to={"/*"}>
                        <li className=" py-3 w-[150px] text-left text-black text-[15px] hover:text-blue-500 transition-colors duration-200">
                          404
                        </li>
                      </NavLink>
                      <NavLink to={"/about"}>
                        <li className=" py-3 w-[150px] text-left text-black text-[15px] hover:text-blue-500 transition-colors duration-200">
                          About
                        </li>
                      </NavLink>
                      <NavLink to={"/about"}>
                        <li className=" py-3 w-[150px] text-left text-black text-[15px] hover:text-blue-500 transition-colors duration-200">
                          About
                        </li>
                      </NavLink>
                      <NavLink to={"/about"}>
                        <li className=" py-3 w-[150px] text-left text-black text-[15px] hover:text-blue-500 transition-colors duration-200">
                          About
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </li>

                {/* ================================================== */}
                <NavLink to={"/contact"}>
                  <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                    {" "}
                    Contact{" "}
                  </li>
                </NavLink>
              </ul>
            </div>

            {/* ======================menu end============================ */}
            <Flex className="gap-x-4">
              <Button
                className={
                  "bg-white text-textClr1 hover:bg-blue-500 transition-colors duration-300"
                }
              >
                Become An Expert
              </Button>
              <Button
                className={
                  "border border-white text-white hover:bg-blue-500 hover:border-blue-500 transition-colors duration-300"
                }
              >
                Sign In / Register
              </Button>
            </Flex>
          </Flex>
        </Container>
      </nav>

      {/* =====================================responsive================================= */}
      <nav className="py-5 px-3 bg-[#0D2857] w-full z-1000 lg:hidden sticky top-0">
        <Container>
          <Flex className={"justify-between"}>
            <picture className="">
              <img src={logo} alt="logo" className="w-20" />
            </picture>

            <button
              onClick={() => setMenu(!menu)}
              className="flex justify-end cursor-pointer"
            >
              {!menu ? (
                <>
                  <FaBars className="text-white" />
                </>
              ) : (
                <RxCross2 className="text-white" />
              )}
            </button>
          </Flex>
          <div className={`${menu ? "block" : "hidden"} w-full pt-6`}>
            <ul className="text-center flex flex-col gap-y-2">
              <NavLink to={"/"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                  Home
                </li>
              </NavLink>
              <NavLink to={"/categories"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                  Categories
                </li>
              </NavLink>
              <NavLink to={"/destination"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                  Destination
                </li>
              </NavLink>
              <NavLink to={"/blog"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                  {" "}
                  Blog
                </li>
              </NavLink>
              <NavLink to={"/pages"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                  {" "}
                  Pages{" "}
                </li>
              </NavLink>
              <NavLink to={"/contact"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                  {" "}
                  Contact{" "}
                </li>
              </NavLink>
            </ul>
            <Flex className="mt-5 gap-x-4 lg:hidden w-full justify-center">
              <Button
                className={
                  "bg-white text-textClr1 hover:bg-blue-500 transition-colors duration-300"
                }
              >
                <p className={"text-black text-[10px]"}>Become An Expert</p>
              </Button>
              <Button
                className={
                  "border border-white text-white hover:bg-blue-500 hover:border-blue-500 transition-colors duration-300"
                }
              >
                <Para>Sign In / Register</Para>
              </Button>
            </Flex>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
