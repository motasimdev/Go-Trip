import React from "react";
import Flex from "../Flex";
import { Link, NavLink } from "react-router";
import logo from "/src/assets/logo.png";
import Para from "../Para";
import Container from "../Container";
import ParaBase from "../ParaBase";
import Button from "../Button";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { BiDollar } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className={"bg-[#0D2857] pt-7 lg:pt-15 px-3 lg:px-0 mt-[100px]"}>
      <Container>
        <div
          className={
            "lg:flex border-b pb-5 lg:pb-15 border-px border-[#ffffff42]"
          }
        >
          <div className="lg:w-[50%]">
            <Link to={"/"} className="">
              <picture className="flex justify-center lg:justify-normal">
                <img src={logo} alt="logo" className="w-20 lg:w-[140px]" />
              </picture>
            </Link>
            <div className="flex gap-x-5 justify-around md:justify-around lg:justify-normal">
              <div className="lg:w-[33%]">
                <div className="">
                  <Para className={"pt-8"}>Toll Free Customer Care</Para>
                  <ParaBase
                    className={"text-lg font-medium pt-4 pb-8 lg:pb-[60px]"}
                  >
                    +(1) 123 456 7890
                  </ParaBase>
                  <ParaBase className={"font-medium"}>
                    Your all-in-one travel app
                  </ParaBase>

                  {/* =============btn================ */}
                  <div className="mt-4 mb-10 lg:mb-20">
                    <Button className={"bg-[#ffffff37]"}>
                      <Flex className={"gap-x-3"}>
                        <FaApple className="text-white text-2xl lg:text-4xl" />
                        <div className="">
                          <Para>Download on the</Para>
                          <ParaBase className={"lg:text-[15px]"}>
                            Apple Store
                          </ParaBase>
                        </div>
                      </Flex>
                    </Button>
                  </div>
                  {/* =============btn================ */}
                  <ParaBase className={"text-white pb-4"}>
                    Follow us on social media
                  </ParaBase>
                  {/* ====================icons================ */}
                  <Flex className={"gap-x-1 "}>
                    <Link>
                      <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                        <FaFacebookF className="text-white" />
                      </div>
                    </Link>
                    <Link>
                      <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                        <IoLogoTwitter className="text-white" />
                      </div>
                    </Link>
                    <Link>
                      <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                        <FaInstagram className="text-white" />
                      </div>
                    </Link>
                    <Link>
                      <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                        <FaLinkedinIn className="text-white" />
                      </div>
                    </Link>
                  </Flex>
                  {/* ====================icons================ */}
                </div>
              </div>
              {/* ========================= */}
              <div className="lg:w-[33%]">
                <Para className={"pt-8"}>Need live support?</Para>
                <ParaBase className={"text-lg pt-4 pb-[60px]"}>
                  hi@gotrip.com
                </ParaBase>
                <div className="mt-1.5 lg:mt-10 mb-[60px]">
                  <Button className={"bg-[#ffffff37]"}>
                    <Flex className={"gap-x-3"}>
                      <FaGooglePlay className="text-white text-2xl lg:text-4xl" />
                      <div className="">
                        <Para>Get in on</Para>
                        <ParaBase className={"lg:text-[15px]"}>
                          Google Play
                        </ParaBase>
                      </div>
                    </Flex>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ========================searchbox=========================== */}

          <div className="text-center lg:text-left lg:w-[50%] pt-5 lg:pt-0">
            <ParaBase>Get Updates & More</ParaBase>
            <div className="relative mt-5">
              <input
                type="text"
                placeholder="Your Email"
                className="py-2 pl-4 lg:py-6 lg:pl-7.5 bg-white w-full rounded-sm  placeholder:text-[12px] placeholder:lg:text-[15px]"
              />
              <Link>
                <span
                  className={
                    "text-textClr1 text-[12px] lg:text-[15px] font-medium border-b border-textClr1 absolute top-1/2 right-7.5 transform -translate-y-1/2"
                  }
                >
                  Subscribe
                </span>
              </Link>
            </div>

            {/* =====================menu list======================= */}
            <div className="hidden lg:flex mt-18 justify-between">
              {/* =============list 01======== */}
              <div className="">
                <NavLink>
                  <ParaBase
                    className={
                      "pb-9 hover:text-blue-500 transition-colors duration-200"
                    }
                  >
                    Company
                  </ParaBase>
                </NavLink>
                <ul className="flex flex-col gap-y-6">
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      About Us
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Careers
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Blog
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Press
                    </li>
                  </NavLink>

                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Gift Cards
                    </li>
                  </NavLink>

                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Magazine
                    </li>
                  </NavLink>
                </ul>
              </div>

              {/* =============list 02======== */}

              <div className="">
                <NavLink>
                  <ParaBase className={"pb-9 hover:text-blue-500 transition-colors duration-200"}>Support</ParaBase>
                </NavLink>
                <ul className="flex flex-col gap-y-6">
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Contact
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Legal Notice
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Privacy Policy
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Sitemap
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Terms and Conditions
                    </li>
                  </NavLink>
                </ul>
              </div>

              {/* =============list 03======== */}

              <div className="">
                <NavLink>
                  <ParaBase className={"pb-9 hover:text-blue-500 transition-colors duration-200"}>Other Services</ParaBase>
                </NavLink>
                <ul className="flex flex-col gap-y-6">
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Car hire
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Activity Finder
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Tour List
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Flight finder
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Cruise Ticket
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Holiday Rental
                    </li>
                  </NavLink>
                  <NavLink to={"/"}>
                    <li className=" text-white text-[15px] hover:text-blue-500 transition-colors duration-200">
                      Travel Agents
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===================down footer start==================== */}
        <div className="py-5 lg:flex items-center justify-between">
          <Flex
            className={
              "justify-between lg:justify-normal lg:gap-x-11 mb-3 lg:mb-0"
            }
          >
            <Para className={" text-white"}>
              © 2022 GoTrip LLC All rights reserved.
            </Para>
            <Flex className={"gap-x-2.5"}>
              <div className="h-1 w-1 lg:h-2 lg:w-2 bg-white rounded-full"></div>
              <Para>Privacy</Para>
              <div className="h-1 w-1 lg:h-2 lg:w-2 bg-white rounded-full"></div>
              <Para>Terms</Para>
              <div className="h-1 w-1 lg:h-2 lg:w-2 bg-white rounded-full"></div>
              <Para>Site Map</Para>
            </Flex>
          </Flex>
          <Flex className={"gap-x-3 justify-center lg:justify-normal"}>
            <TfiWorld className="text-white text-[13px] lg:text-md" />
            <Para className={"font-medium"}>English (US)</Para>
            <BiDollar className="text-white text-[13px] lg:text-md" />
            <Para className={"font-medium"}>USD</Para>
          </Flex>
        </div>
        {/* ===================down footer==================== */}
      </Container>
    </footer>
  );
};

export default Footer;
