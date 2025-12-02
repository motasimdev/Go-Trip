import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";
import ParaBase from "../../ParaBase";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiUserCircle } from "react-icons/hi";
import Para15 from "../../Para15";

const Des_lovelondon = () => {
  AOS.init();
  AOS.init({
    duration: 800,
    offset: 200,
  });
  return (
    <>
      <section className="py-15 lg:py-[120px] px-3 lg:px-0 bg-[#F5F5F5]">
        <Container>
          <div className="md:flex justify-between">
            <div className="md:w-[48%] md:pr-30 text-center md:text-left">
              <div className="mb-8 lg:mb-11" data-aos="fade-up">
                <Heading
                  title={"Why people love London"}
                  subTitle={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
                  }
                />
              </div>
              <div className="flex gap-x-40">
                <div>
                  {" "}
                  <h4 className="text-3xl text-textClr1 font-semibold">13m+</h4>
                  <ParaBase
                    text={"Happy People"}
                    className={"text-textClr2! py-4"}
                  />
                </div>
                {/* ------------- */}
                <div>
                  {" "}
                  <h4 className="text-3xl text-textClr1 font-semibold">4.88</h4>
                  <ParaBase
                    text={"Overall rating"}
                    className={"text-textClr2! py-2 lg:py-4 w-co"}
                  />
                  <Flex>
                    <FaStar className="text-[12px] text-textClr3" />
                    <FaStar className="text-[12px] text-textClr3" />
                    <FaStar className="text-[12px] text-textClr3" />
                    <FaStar className="text-[12px] text-textClr3" />
                    <FaStar className="text-[12px] text-textClr3" />
                  </Flex>
                </div>
              </div>
            </div>

            {/* ======================================= */}

            <div className="md:w-[48%] mt-6 md:mt-3 lg:mt-0">
              <Swiper
                className="mySwiper relative"
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                  clickable: true,
                  type: "progressbar",
                  el: ".custom-progressbar",
                }}
                arrows={false}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  1024: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  640: { slidesPerView: 1 },
                }}
              >
                <SwiperSlide>
                  <div className="" data-aos="fade-up" data-aos-offset="130">
                    <Flex className={"mb-6"}>
                      <div className="cursor-pointer rounded-full ">
                        <HiUserCircle className="text-6xl lg:text-[75px]" />
                      </div>
                      <div className="">
                        <ParaBase
                          text={"Annette Black"}
                          className={"text-textClr1! font-medium"}
                        />
                        <Para15
                          text={"UX / UI Designer"}
                          className={"text-textClr2!"}
                        />
                      </div>
                    </Flex>
                    <p className="text-lg text-textClr1 font-medium">
                      The place is in a great location in Gumbet. The area is
                      safe and beautiful. The apartment was comfortable and the
                      host was kind and responsive to our requests.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="" data-aos="fade-up" data-aos-offset="130">
                    <Flex className={"mb-6"}>
                      <div className="cursor-pointer rounded-full ">
                        <HiUserCircle className="text-6xl lg:text-[75px]" />
                      </div>
                      <div className="">
                        <ParaBase
                          text={"Annette Black"}
                          className={"text-textClr1! font-medium"}
                        />
                        <Para15
                          text={"UX / UI Designer"}
                          className={"text-textClr2!"}
                        />
                      </div>
                    </Flex>
                    <p className="text-lg text-textClr1 font-medium">
                      The place is in a great location in Gumbet. The area is
                      safe and beautiful. The apartment was comfortable and the
                      host was kind and responsive to our requests.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="" data-aos="fade-up" data-aos-offset="130">
                    <Flex className={"mb-6"}>
                      <div className="cursor-pointer rounded-full ">
                        <HiUserCircle className="text-6xl lg:text-[75px]" />
                      </div>
                      <div className="">
                        <ParaBase
                          text={"Annette Black"}
                          className={"text-textClr1! font-medium"}
                        />
                        <Para15
                          text={"UX / UI Designer"}
                          className={"text-textClr2!"}
                        />
                      </div>
                    </Flex>
                    <p className="text-lg text-textClr1 font-medium">
                      The place is in a great location in Gumbet. The area is
                      safe and beautiful. The apartment was comfortable and the
                      host was kind and responsive to our requests.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="custom-progressbar h-1 bg-gray-300 rounded-full relative  overflow-hidden z-10"></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Des_lovelondon;
