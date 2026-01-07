import Flex from "@/components/Flex";
import Para15 from "@/components/Para15";
import ParaBase from "@/components/ParaBase";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const Blog_reply = () => {
  return (
    <>
      <section className="py-2 lg:pt-6 px-3 lg:px-0">
        <div className="max-w-[850px] m-auto">
          <h6 className="pb-4 text-lg font-medium md:text-[22px] text-textClr1">
            Leave a Reply
          </h6>
          <ParaBase
            text={"Your email address will not be published."}
            className={"text-textClr1! font-normal"}
          />
          <Flex className={"justify-between"}>
            <input
              type="text"
              placeholder="text"
              className="py-5 border border-gray-300 lg:w-[400px] pl-6"
            />
            <input
              type="email"
              placeholder="email"
              className="py-5 border border-gray-300 lg:w-[400px] pl-6"
            />
          </Flex>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write your comment"
            className="border border-gray-300 w-full pl-6 mt-10"
          ></textarea>
          <Link to={"/"}>
            <div className="inline-flex bg-textClr3 py-3.5 px-7.5 gap-3 curpo group hover:bg-textClr3/5 transition-colors duration-200 rounded-sm">
              <p className=" text-[15px] text-white font-medium group-hover:text-textClr3 transition-colors duration-200">
                Show all 116 reviews
              </p>
              <MdOutlineArrowOutward className="text-white group-hover:text-textClr3 transition-colors duration-200" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog_reply;
