import Flex from "@/components/Flex";
import Para15 from "@/components/Para15";
import ParaBase from "@/components/ParaBase";
import React from "react";

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
              className="py-5 border border-gray-300 lg:w-[400px]"
            />
            <input
              type="email"
              placeholder="email"
              className="py-5 border border-gray-300 lg:w-[400px]"
            />
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Blog_reply;
