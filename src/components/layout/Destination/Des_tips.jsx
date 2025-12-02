import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import cardOne from "/src/assets/Des-nexttrip1.png";
import cardTwo from "/src/assets/Des-nexttrip2.png";
import cardThree from "/src/assets/Des-nexttrip3.png";
import Para15 from "../../Para15";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Des_tips = () => {
  AOS.init();
  AOS.init({
    duration: 800,
    offset: 200,
  });
  return (
    <>
      <section className="py-7.5 lg:py-20 px-3 lg:px-0">
        <Container>
          <div className="">
            <div
              className="mb-8 md:mb-9 lg:mb-11 text-center md:text-left"
              data-aos="fade-up"
            >
              <Heading
                title={"Travel guides & tips for London"}
                subTitle={"Interdum et malesuada fames ac ante ipsum"}
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="group cursor-pointer"
                data-aos="fade-up"
                data-aos-offset="130"
              >
                <div className="h-80 overflow-hidden rounded-lg">
                  <img
                    src={cardOne}
                    alt=""
                    className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg text-textClr1 font-medium py-3">
                  10 European ski destinations you should visit this winter
                </h4>
                <Para15 text={"April 06, 2022"} className={"text-textClr2! "} />
              </div>
              <div
                className="group cursor-pointer"
                data-aos="fade-up"
                data-aos-offset="130"
              >
                <div className="h-80 overflow-hidden rounded-lg">
                  <img
                    src={cardTwo}
                    alt=""
                    className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg text-textClr1 font-medium py-3">
                  10 European ski destinations you should visit this winter
                </h4>
                <Para15 text={"April 06, 2022"} className={"text-textClr2! "} />
              </div>
              <div
                className="group cursor-pointer"
                data-aos="fade-up"
                data-aos-offset="130"
              >
                <div className="h-80 overflow-hidden rounded-lg">
                  <img
                    src={cardThree}
                    alt=""
                    className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg text-textClr1 font-medium py-3">
                  10 European ski destinations you should visit this winter
                </h4>
                <Para15 text={"April 06, 2022"} className={"text-textClr2! "} />
              </div>
              <div
                className="group cursor-pointer hidden md:block lg:hidden"
                data-aos="fade-up"
                data-aos-offset="130"
              >
                <div className="h-80 overflow-hidden rounded-lg">
                  <img
                    src={cardThree}
                    alt=""
                    className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg text-textClr1 font-medium py-3">
                  10 European ski destinations you should visit this winter
                </h4>
                <Para15 text={"April 06, 2022"} className={"text-textClr2! "} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Des_tips;
