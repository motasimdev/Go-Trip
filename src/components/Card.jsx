import React from "react";
import Flex from "./Flex";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Badge from "./Badge";

const Card = ({ className, badgTxt, cardPic, placeTitle, city }) => {
  return (
    <div className={`max-w-[234px] group relative cursor-pointer ${className}`}>
      <Badge className={"absolute top-4 left-0 z-10"} bagText={badgTxt} />
      <div className="max-h-[234px] overflow-hidden">
        <img
          src={cardPic}
          alt="product image"
          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="">
          <FaRegHeart className="absolute top-4 right-4 text-3xl z-10 bg-white rounded-full py-2 px-2 text-textClr3 hover:text-white hover:bg-textClr3" />
        </div>
      </div>

      <div className="mt-2.5 flex flex-col gap-y-3">
        <h5 className="text-sm text-textClr2">6+ hourse </h5>
        <h3 className="font-medium text-textClr1 leading-7.5">{placeTitle}</h3>
        <h5 className="text-sm text-textClr2">{city} </h5>
        <Flex>
          <div className="">
            <FaStar className="text-amber-300" />
          </div>
          <p className="text-[15px] font-medium text-textClr1 pl-4 pr-2">
            4.82
          </p>
          <p className="text-sm text-textClr2">94 reviews</p>
        </Flex>
        <Flex className={"gap-x-2"}>
          <p className="text-sm text-textClr2">From</p>
          <p className="text-[15px] font-medium text-textClr1">US$72</p>
        </Flex>
      </div>
    </div>
  );
};

export default Card;
