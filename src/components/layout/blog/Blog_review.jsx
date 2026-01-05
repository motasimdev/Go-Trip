import Flex from "@/components/Flex";
import ParaBase from "@/components/ParaBase";
import React from "react";
import user from "/src/assets/blog/user.png";
import Para from "@/components/Para";

const Blog_review = () => {
  return (
    <>
      <section className="py-2 lg:pt-6 px-3 lg:px-0">
        <div className="max-w-[850px] m-auto">
          <h6 className="text-lg font-medium md:text-[22px] text-textClr1">
            Guest reviews
          </h6>
          <div className="flex gap-x-3">
            <div className="w-10 lg:h-[70px] h-10 lg:w-[70px] overflow-hidden">
              <img src={user} alt="user" className="w-full" />
            </div>
            <div className="">
              <ParaBase text={"Tonko"} className={"text-textClr1!"} />
              <Para text={"March 2022"} className={"text-textClr2"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog_review;
