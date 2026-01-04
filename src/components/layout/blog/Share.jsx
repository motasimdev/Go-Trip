import Flex from "@/components/Flex";
import ParaBase from "@/components/ParaBase";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Share = () => {
  return (
    <>
      <section>
        <div className="max-w-[850px] m-auto">
          <Flex>
            <ParaBase text={"Share"} className={"font-medium"} />
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
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Share;
