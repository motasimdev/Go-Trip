import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import insOne from "/src/assets/inpiration1.png";
import insTwo from "/src/assets/inpiration2.png";

const Inspiration = () => {
  return (
    <>
      <section className="py-7.5 lg:pt-[120px] lg:pb-8 px-3 lg:px-0">
        <Container>
          <div className="">
            <div className="mb-8 text-center lg:mb-11">
              <Heading
                title={"Get inspiration for your next trip"}
                subTitle={"Interdum et malesuada fames"}
              />
            </div>
            <div className="lg:flex items-center">
              <div className="md:flex items-center justify-between lg:w-[48%] pb-10 lg:pb-0">
                <div className="md:w-[33%] lg:w-[30%]">
                  <img src={insOne} alt="" className="w-full" />
                </div>
                <div className="text-center md:text-left pt-5 md:pt-0 md:w-[65%] md:pr-17">
                  <p className="text-[15px] text-textClr2">April 06, 2022</p>
                  <h4 className="text-[22px] text-textClr1 font-semibold">
                    10 European ski destinations you should visit this winter
                  </h4>
                  <p className="text-[15px] text-textClr2">
                    Ut enim ad minim veniam, quis nostrud exerc ullamco laboris
                    nisi ut aliquip.
                  </p>
                </div>
              </div>

              {/*  */}

              {/* ================================= */}

              <div className="md:flex items-center justify-between lg:w-[48%]">
                <div className="md:w-[33%] lg:w-[30%]">
                  <img src={insOne} alt="" className="w-full" />
                </div>
                <div className="text-center md:text-left pt-5 md:pt-0 md:w-[65%] md:pr-17">
                  <p className="text-[15px] text-textClr2">April 06, 2022</p>
                  <h4 className="text-[22px] text-textClr1 font-semibold">
                    10 European ski destinations you should visit this winter
                  </h4>
                  <p className="text-[15px] text-textClr2">
                    Ut enim ad minim veniam, quis nostrud exerc ullamco laboris
                    nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Inspiration;
