import React from "react";
import { NavLink } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import logo from "/src/assets/logo.png";
import Button from "../Button";

const Header = () => {
  return (
    <nav className="py-5 bg-gray-400 fixed top-0 left-0 w-full">
      <Container>
        <Flex className={"justify-between "}>
          <picture>
            <img src={logo} alt="logo" />
          </picture>
          <div className="">
            <ul className="flex items-center gap-x-4 text-center">
              <NavLink to={"/"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">Home</li>
              </NavLink>
              <NavLink to={"/categories"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">Categories</li>
              </NavLink>
              <NavLink to={"/destination"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200">Destination</li>
              </NavLink>
              <NavLink to={"/blog"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200"> Blog</li>
              </NavLink>
              <NavLink to={"/pages"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200"> Pages </li>
              </NavLink>
              <NavLink to={"/contact"}>
                <li className="font-medium text-white text-[15px] hover:text-blue-500 transition-colors duration-200"> Contact </li>
              </NavLink>
            </ul>
          </div>
          <Flex className="gap-x-4">
            <Button className={"bg-white text-textClr1 hover:bg-blue-500 transition-colors duration-300"}>Become An Expert</Button>
            <Button className={"border border-white text-white hover:bg-blue-500 hover:border-blue-500 transition-colors duration-300"}>Sign In / Register</Button>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Header;
