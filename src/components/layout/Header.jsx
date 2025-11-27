import React, { useState } from "react";
import { NavLink } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import logo from "/src/assets/logo.png";
import Button from "../Button";
import { FaBars } from "react-icons/fa6";

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
      <nav className="py-5 px-3 bg-gray-400 w-full z-1000 lg:hidden">
        <Container>
          <Flex className={"justify-between"}>
            <picture className="w-20">
              <img src={logo} alt="logo" />
            </picture>
            <div className={`${menu ? "block" : "hidden"}`}>
              <ul className="text-center">
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
              <Flex className="gap-x-4 lg:hidden">
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
            </div>
            <button onClick={() => setMenu(!menu)}>
              <FaBars className="text-white" />
            </button>

            {/* ===================signup btns================= */}
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Header;
