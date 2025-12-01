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
import Traveller from "../Traveller";

const Activity = () => {
  return (
    <>
      <section className="py-7.5 lg:py-[60px] px-3 lg:px-0">
        <Container>
          <div className="text-center mb-8 lg:mb-11">
            <Heading
              title={"Adventure & Activity"}
              subTitle={"Interdum et malesuada fames ac ante ipsum"}
            />
          </div>
          <div className={" grid md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-7 justify-center"}>
            <div className="group hover:bg-textClr3 transition-all duration-300 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center hover:-translate-y-3 rounded-sm">
              <CampIcon className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
            <div className="group hover:bg-textClr3 transition-all duration-300 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center hover:-translate-y-3 rounded-sm">
              <Hiking className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
            <div className="group hover:bg-textClr3 transition-all duration-300 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center hover:-translate-y-3 rounded-sm">
              <Fire className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
            <div className="group hover:bg-textClr3 transition-all duration-300 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center hover:-translate-y-3 rounded-sm">
              <Zeep className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
            <div className="group hover:bg-textClr3 transition-all duration-300 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center hover:-translate-y-3 rounded-sm">
              <Traveller className={"m-auto mb-15 group-hover:text-white transition-all duration-100"}/>
              <h4 className={"text-lg text-textClr1 font-medium group-hover:text-white transition-all duration-100"}>
                Camping
              </h4>
              <p className={"text-[15px] text-textClr2 group-hover:text-white transition-all duration-100"}>
                5  Tours From 550$
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Activity;
