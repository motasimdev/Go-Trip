import React, { useState } from "react";
import { NavLink } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import logo from "/src/assets/logo.png";
import Button from "../Button";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Para from "../Para";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="py-5 bg-gray-400 fixed top-0 left-0 w-full z-1000 hidden lg:block">
        <Container>
          <Flex className={"justify-between "}>
            <picture>
              <img src={logo} alt="logo" />
            </picture>
            <div className="">
              <ul className="flex items-center gap-x-4 text-center">
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
            </div>
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
      <nav className="py-5 px-3 bg-[#0D2857] w-full z-1000 lg:hidden">
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
