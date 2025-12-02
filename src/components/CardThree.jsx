import React from "react";
import ParaBase from "./ParaBase";
import Flex from "./Flex";
import Badge from "./Badge";
import { FaRegHeart } from "react-icons/fa";
import Para from "./Para";

const CardThree = ({ className, badgTxt, cardPic, placeTitle, city, time, type }) => {
  return (
    <div className={`group max-w-[300px] relative cursor-pointer ${className}`}>
      <Badge className={"absolute top-4 left-0 z-10"} bagText={badgTxt} />
      <div className=" max-h-[300px] overflow-hidden">
        <img
          src={cardPic}
          alt="product image"
          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="  ">
          <FaRegHeart className="absolute top-4 right-4 text-3xl z-10 bg-white rounded-full py-2 px-2 text-textClr3 hover:text-white hover:bg-textClr3" />
        </div>
      </div>

      <div className="mt-2.5 flex flex-col gap-y-3">
        <Flex>
          <Para className={"text-textClr2!"}>{time}</Para>
          <div className="h-1 w-1 rounded-full mx-2 bg-textClr2"></div>
          <Para className={"text-textClr2!"}>{type}</Para>
        </Flex>
        <h3 className="font-medium text-lg text-textClr1 leading-7.5">
          {placeTitle}
        </h3>
        <h5 className="text-sm text-textClr2">{city} </h5>

        <Flex>
          <div className="">
            <div className="py-1 px-1 rounded-sm bg-textClr3 text-white">
              <p className="text-[12px]">4.8</p>
            </div>
          </div>
          <p className="text-sm font-medium text-textClr1 px-1.5">
            Exceptional
          </p>
          <p className="text-sm text-textClr2">3,014 reviews</p>
        </Flex>
        <ParaBase className={"text-textClr1!"}>
          Starting from <span className="text-textClr3!">US$72</span>
        </ParaBase>
      </div>
    </div>
  );
};

export default CardThree;
