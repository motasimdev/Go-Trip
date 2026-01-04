import Flex from "@/components/Flex";
import ParaBase from "@/components/ParaBase";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router";

const Blog_share = () => {
  return (
    <>
      <section>
        <div className="max-w-[850px] m-auto">
          <Flex>
            <ParaBase text={"Share"} className={"text-black!"} />
            <Flex className={"gap-x-1 "}>
              <Link>
                <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#F5F5F5] transition-colors duration-300">
                  <FaFacebookF className="text-textClr1" />
                </div>
              </Link>
              <Link>
                <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#F5F5F5] transition-colors duration-300">
                  <IoLogoTwitter className="text-textClr1" />
                </div>
              </Link>
              <Link>
                <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#F5F5F5] transition-colors duration-300">
                  <FaInstagram className="text-textClr1" />
                </div>
              </Link>
              <Link>
                <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#F5F5F5] transition-colors duration-300">
                  <FaLinkedinIn className="text-textClr1" />
                </div>
              </Link>
            </Flex>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Blog_share;
