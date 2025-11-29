import React from "react";
import Container from "../Container";
import ParaBase from "../ParaBase";
import koma from "/src/assets/“.png";
import Para from "../Para";
import { HiUserCircle } from "react-icons/hi2";
import Flex from "../Flex";

const Testimonial = () => {
  return (
    <>
      <section className="pt-15 lg:pt-[120px] lg:pb-[100px] px-3 lg:px-0 bg-[url(/src/assets/testimonialBg.png)] bg-no-repeat bg-cover bg-center">
        <Container>
          <div className="text-center">
            <h4>Testimonials</h4>
            <ParaBase className={"text-textClr2!"}>
              Interdum et malesuada fames ac ante ipsum
            </ParaBase>
            <div className="w-15 m-auto">
              <img src={koma} alt="" className="w-full" />
            </div>
            <h5>
              "Our family was traveling via bullet train between cities in Japan
              with our luggage - the location for this hotel made that so easy.
              Agoda price was fantastic. "
            </h5>
            <p>Ali Tufan</p>
            <Para>Product Manager, Apple Inc</Para>
            <Flex className={"justify-center"}>
              <div className="cursor-pointer">
                <HiUserCircle className="text-[75px]" />
              </div>
              <div className="cursor-pointer">
                <HiUserCircle className="text-[75px]" />
              </div>
              <div className="cursor-pointer">
                <HiUserCircle className="text-[75px]" />
              </div>
              <div className="cursor-pointer">
                <HiUserCircle className="text-[75px]" />
              </div>
              <div className="cursor-pointer">
                <HiUserCircle className="text-[75px]" />
              </div>
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
