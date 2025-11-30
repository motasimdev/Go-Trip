import React from "react";
import Flex from "./Flex";
import Badge from "./Badge";
import { FaStar } from "react-icons/fa";

const CardTwo = () => {
  return (
    <div className={`max-w-[300px] relative ${className}`}>
      <Badge className={"absolute top-4 left-0"} bagText={badgTxt} />
      <img src={cardPic} alt="product image" className="w-full max-h-[234px]" />

      <div className="mt-2.5 flex flex-col gap-y-3">
        <h5 className="text-sm text-textClr2">6+ hourse </h5>
        <h3 className="font-medium text-textClr1 leading-7.5">{placeTitle}</h3>
        <h5 className="text-sm text-textClr2">{city} </h5>
        <Flex className={"justify-between"}>
          <Flex>
            <div className="">
              <FaStar className="text-amber-300" />
            </div>
            <p className="text-[15px] font-medium text-textClr1">
              4.82
            </p>
            <p className="text-sm text-textClr2">94 reviews</p>
          </Flex>
          <Flex className={""}>
            <p className="text-sm text-textClr2">From</p>
            <p className="text-[15px] font-medium text-textClr1">US$72</p>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default CardTwo;
