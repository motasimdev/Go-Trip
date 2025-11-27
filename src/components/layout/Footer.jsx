import React from "react";
import Flex from "../Flex";
import { Link } from "react-router";
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

const Footer = () => {
  return (
    <footer className={"bg-[#0D2857] pt-15 mt-[100px]"}>
      <Container>
        <div className={"flex border-b pb-15 border-px border-[#ffffff42]"}>
          <div className="w-[50%]">
            <Link>
              <picture>
                <img src={logo} alt="logo" />
              </picture>
            </Link>
            <div className="flex gap-x-5">
              <div className="w-[33%]">
                <div className="">
                  <Para className={"pt-8"}>Toll Free Customer Care</Para>
                  <ParaBase className={"text-lg font-medium pt-4 pb-[60px]"}>
                    +(1) 123 456 7890
                  </ParaBase>
                  <ParaBase className={"font-medium"}>
                    Your all-in-one travel app
                  </ParaBase>

                  {/* =============btn================ */}
                  <div className="mt-4 mb-[60px]">
                    <Button className={"bg-[#ffffff37]"}>
                      <Flex className={"gap-x-3"}>
                        <FaApple className="text-white text-4xl" />
                        <div className="">
                          <Para>Download on the</Para>
                          <ParaBase className={"text-[15px]"}>
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
                      <div className="py-4 px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                        <FaFacebookF className="text-white" />
                      </div>
                    </Link>
                    <Link>
                      <div className="py-4 px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                        <IoLogoTwitter className="text-white" />
                      </div>
                    </Link>
                    <Link>
                      <div className="py-4 px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                        <FaInstagram className="text-white" />
                      </div>
                    </Link>
                    <Link>
                      <div className="py-4 px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                        <FaLinkedinIn className="text-white" />
                      </div>
                    </Link>
                  </Flex>
                  {/* ====================icons================ */}
                </div>
              </div>
              {/* ========================= */}
              <div className="w-[33%]">
                <Para className={"pt-8"}>Need live support?</Para>
                <ParaBase className={"text-lg pt-4 pb-[60px]"}>
                  hi@gotrip.com
                </ParaBase>
                <div className="mt-10 mb-[60px]">
                  <Button className={"bg-[#ffffff37]"}>
                    <Flex className={"gap-x-3"}>
                      <FaGooglePlay className="text-white text-4xl" />
                      <div className="">
                        <Para>Get in on</Para>
                        <ParaBase className={"text-[15px]"}>
                          Google Play
                        </ParaBase>
                      </div>
                    </Flex>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================== */}

          <div className="w-[50%]">
            <ParaBase>Get Updates & More</ParaBase>
            <div className="relative">
              <input
                type="text"
                placeholder="Your Email"
                className="py-6 pl-7.5 bg-white w-full rounded-sm"
              />
              <Link>
              <span className={"text-textClr1 text-[15px] font-medium border-b border-textClr1 absolute top-1/2 right-7.5 transform -translate-y-1/2"}>Subscribe</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ===================down footer start==================== */}
        <Flex className="py-5 gap-x-11">
          <Para className={" text-white"}>
            © 2022 GoTrip LLC All rights reserved.
          </Para>
          <Flex className={"gap-x-2.5"}>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <Para>Privacy</Para>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <Para>Terms</Para>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <Para>Site Map</Para>
          </Flex>
        </Flex>
        {/* ===================down footer==================== */}
      </Container>
    </footer>
  );
};

export default Footer;
