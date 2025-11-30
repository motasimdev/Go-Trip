import React from "react";
import Container from "../Container";
import ParaBase from "../ParaBase";
import koma from "/src/assets/“.png";
import Para from "../Para";
import { HiUserCircle } from "react-icons/hi2";
import Flex from "../Flex";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  AOS.init();
  AOS.init({
    duration: 800,
    offset: 200,
  });
  return (
    <>
      <section className="pt-10 lg:pt-[120px] pb-10 lg:pb-[100px] px-3 lg:px-0 bg-[url(/src/assets/testimonialBg.png)] bg-no-repeat bg-cover bg-center">
        <Container>
          <div className="text-center">
            <h4
              className="pb-3 lg:pb-5 text-2xl lg:text-3xl text-textClr1 font-semibold"
              data-aos="fade-up"
            >
              Testimonials
            </h4>
            <div className="" data-aos="fade-up">
              <ParaBase className={"text-textClr2!"}>
                Interdum et malesuada fames ac ante ipsum
              </ParaBase>
            </div>
            <div className="py-8 lg:py-12.5 w-10 lg:w-15 m-auto" data-aos="fade-up" data-aos-offset="130">
              <img src={koma} alt="" className="w-full" />
            </div>
            <h5 className="max-w-[796px] m-auto leading-8 lg:leading-[45px] text-lg lg:text-[22px] text-textClr1 font-semibold" data-aos="fade-up" data-aos-offset="130">
              "Our family was traveling via bullet train between cities in Japan
              with our luggage - the location for this hotel made that so easy.
              Agoda price was fantastic. "
            </h5>
            <div className="pt-8 lg:pt-12.5 pb-6 lg:pb-9" data-aos="fade-up" data-aos-offset="130">
              <p className="pb-2 lg:pb-4 text-sm lg:text-[15px] text-textClr1 font-medium">
                Ali Tufan
              </p>
              <Para className={"text-textClr2!"}>
                Product Manager, Apple Inc
              </Para>
            </div>
            <Flex className={"justify-center lg:gap-3"}>
              <div className="cursor-pointer rounded-full border border-transparent hover:border-black transition-all duration-200">
                <HiUserCircle className="text-6xl lg:text-[75px]" />
              </div>
              <div className="cursor-pointer rounded-full border border-transparent hover:border-black transition-all duration-200">
                <HiUserCircle className="text-6xl lg:text-[75px]" />
              </div>
              <div className="cursor-pointer rounded-full border border-transparent hover:border-black transition-all duration-200">
                <HiUserCircle className="text-6xl lg:text-[75px]" />
              </div>
              <div className="cursor-pointer rounded-full border border-transparent hover:border-black transition-all duration-200">
                <HiUserCircle className="text-6xl lg:text-[75px]" />
              </div>
              <div className="cursor-pointer rounded-full border border-transparent hover:border-black transition-all duration-200">
                <HiUserCircle className="text-6xl lg:text-[75px]" />
              </div>
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
