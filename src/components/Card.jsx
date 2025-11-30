import React from "react";
import Flex from "./Flex";
import { FaStar } from "react-icons/fa";
import Badge from "./Badge";

const Card = ({ className, badgTxt, cardPic, placeTitle, city }) => {
  return (
    <div className={`max-w-[234px] relative ${className}`}>
      <Badge className={"absolute top-4 left-0"} bagText={badgTxt} />
      <div className="max-h-[234px] overflow-hidden">
        <img
          src={cardPic}
          alt="product image"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
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
