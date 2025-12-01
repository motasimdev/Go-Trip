import React from "react";
import ParaBase from "./ParaBase";
import Flex from "./Flex";
import Badge from "./Badge";
import { FaRegHeart } from "react-icons/fa";


const CardThree = ({className, badgTxt, cardPic, placeTitle, city }) => {
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
          <FaRegHeart className="absolute top-6 right-6 text-3xl z-10 bg-white rounded-full py-2 px-2 text-textClr3 hover:text-white hover:bg-textClr3" />
        </div>
      </div>

      <div className="mt-2.5 flex flex-col gap-y-3">
        <h3 className="font-medium text-lg text-textClr1 leading-7.5">
          {placeTitle}
        </h3>
        <h5 className="text-sm text-textClr2">{city} </h5>
        <Flex className={"justify-between"}>
          <Flex>
            <div className="">
              <div className="py-1 px-1 rounded-sm bg-textClr3 text-white"><p className="text-[12px]"></p></div>
            </div>
            <p className="text-sm font-medium text-textClr1 px-1.5">Exceptional</p>
            <p className="text-sm text-textClr2">3,014 reviews</p>
          </Flex>
          <ParaBase className={"text-textClr1!"}>
            Starting from <span className="text-textClr3!">US$72</span>
          </ParaBase>
        </Flex>
      </div>
    </div>
  );
};

export default CardThree;
