import React from "react";
import ParaBase from "../ParaBase";
import Container from "../Container";
import { IoMdSearch } from "react-icons/io";
import Flex from "../Flex";
import 'animate.css';

const Hero = () => {
  return (
    <>
      <section className="bg-[url(/src/assets/bannerBg.png)] bg-no-repeat bg-cover bg-center px-3 lg:px-0 pt-10 md:pt-20 lg:pt-[375px] pb-10 md:pb-16 lg:pb-[295px]">
        <Container>
          <div className="text-center">
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl text-white animate__animated  animate__fadeInUp animate__fast">
              The World is Waiting For You
            </h1>
            <ParaBase className={"font-normal pt-3 lg:pt-5 pb-3 lg:pb-7 animate__animated  animate__fadeInUp"}>
              Discover amzaing places at exclusive deals
            </ParaBase>
            <div className="bg-white rounded-2xl lg:rounded-full py-2.5 pl-8 md:max-w-[500px] lg:max-w-[900px] m-auto animate__animated  animate__fadeInUp ">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3 lg:gap-y-0 items-center">
                <div className="text-left">
                  <p
                    className={
                      "text-[12px] lg:text-[15px] font-medium text-textClr1"
                    }
                  >
                    Destinations
                  </p>
                  <p className={"text-[12px] lg:text-[15px] text-textClr2"}>
                    Where are you going?
                  </p>
                </div>
                <div className="text-left md:justify-self-center">
                  <p
                    className={
                      "text-[12px] lg:text-[15px] font-medium text-textClr1"
                    }
                  >
                    Check in - Check out
                  </p>
                  <p className={"text-[12px] lg:text-[15px] text-textClr2"}>
                    Wed 2 Mar - Fri 11 Apr
                  </p>
                </div>
                <div className="text-left lg:justify-self-center">
                  <p
                    className={
                      "text-[12px] lg:text-[15px] font-medium text-textClr1"
                    }
                  >
                    Activity Types
                  </p>
                  <p className={"text-[12px] lg:text-[15px] text-textClr2"}>
                    Camping, Nightlife
                  </p>
                </div>
                <div className="md:justify-self-center lg:justify-self-end lg:pr-[11px]">
                  <button className="py-3 lg:py-[19px] px-[26px] lg:px-[35px] bg-[#3554D1] text-white text-[11px] lg:text-[15px] font-medium rounded-xl lg:rounded-full">
                    <Flex className={"gap-x-1"}>
                      <IoMdSearch className="text-2xl" />
                      Search
                    </Flex>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
