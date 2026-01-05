import Flex from "@/components/Flex";
import ParaBase from "@/components/ParaBase";
import React from "react";
import user from "/src/assets/blog/user.png";
import Para from "@/components/Para";
import Para15 from "@/components/Para15";
import reviwPicOne from "/src/assets/blog/mini.png";
import reviwPicTwo from "/src/assets/blog/miniTwo.png";
import reviwPicThree from "/src/assets/blog/miniThree.png";
import reviwPicFour from "/src/assets/blog/miniFour.png";

const Blog_review = () => {
  return (
    <>
      <section className="py-2 lg:pt-6 px-3 lg:px-0">
        <div className="max-w-[850px] m-auto">
          <h6 className="pb-4 text-lg font-medium md:text-[22px] text-textClr1">
            Guest reviews
          </h6>
          <Flex className="gap-x-3">
            <div className="w-10 lg:h-[70px] h-10 lg:w-[70px] overflow-hidden">
              <img src={user} alt="user" className="w-full" />
            </div>
            <div className="">
              <ParaBase text={"Tonko"} className={"text-textClr1!"} />
              <Para text={"March 2022"} className={"text-textClr2!"} />
            </div>
          </Flex>

          <ParaBase
            text={"9.2 Superb"}
            className={"text-textClr3! py-3 lg:py-5"}
          />
          <Para15
            text={
              "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. "
            }
            className={"text-textClr1"}
          />
          <Flex className={"gap-x-5"}>
            <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
              <img src={reviwPicOne} alt="" className="w-full rounded-md"/>
            </div>
            <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
              <img src={reviwPicOne} alt="" className="w-full rounded-md"/>
            </div>
            <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
              <img src={reviwPicOne} alt="" className="w-full rounded-md"/>
            </div>
            <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
              <img src={reviwPicOne} alt="" className="w-full rounded-md"/>
            </div>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Blog_review;
