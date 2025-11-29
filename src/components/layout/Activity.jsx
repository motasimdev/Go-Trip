import React from "react";
import Container from "../Container";
import CampIcon from "../CampIcon";
import Heading from "../Heading";
import Flex from "../Flex";
import ParaBase from "../ParaBase";
import Para from "../Para";
import Hiking from "../Hiking";
import Fire from "../Fire";
import Zeep from "../Zeep";

const Activity = () => {
  return (
    <>
      <section>
        <Container>
          <div className="text-center lg:mb-11">
            <Heading
              title={"Trending Activity"}
              subTitle={"Interdum et malesuada fames ac ante ipsum"}
            />
          </div>
          <Flex className={"justify-between"}>
            <div className="group hover:bg-textClr3 transition-all duration-100 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center">
              <CampIcon className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
            <div className="group hover:bg-textClr3 transition-all duration-100 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center">
              <Hiking className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
            <div className="group hover:bg-textClr3 transition-all duration-100 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center">
              <Fire className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
            <div className="group hover:bg-textClr3 transition-all duration-100 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center">
              <Zeep className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
            <div className="group hover:bg-textClr3 transition-all duration-100 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center">
              <Zeep className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Activity;
