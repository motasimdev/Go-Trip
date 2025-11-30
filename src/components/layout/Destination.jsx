import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { MdOutlineArrowOutward } from "react-icons/md";
import Heading from "../Heading";
import { Link } from "react-router";
import Para from "../Para";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Destination = () => {
  return (
    <section className="py-7.5 lg:py-[120px] px-3 lg:px-0">
      <Container>
        <div className={"mb-8 lg:mb-11 md:flex justify-between"}>
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Heading
              title={"Popular Destinations"}
              subTitle={"These popular destinations have a lot to offer"}
            />
          </div>
          <Link to={"/"}>
            <Flex className="bg-textClr3/5 py-3.5 px-7.5 gap-3 curpo group hover:bg-textClr3 transition-colors duration-200 rounded-sm">
              <p className="text-[15px] text-textClr3 font-medium group-hover:text-white transition-colors duration-200">
                View All Destinations
              </p>
              <MdOutlineArrowOutward className="text-textClr3 group-hover:text-white transition-colors duration-200" />
            </Flex>
          </Link>
        </div>
        {/* ================================================= */}
        <div className="">
          <Swiper
            className="mySwiper relative"
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
              type: "progressbar",
              
            }}
            arrows={false}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
              640: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination1.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          New York
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination2.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          London
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination3.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          Barcelona
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination4.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          Sydney
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination5.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          Rome
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination1.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          New York
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination2.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          London
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination3.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          Barcelona
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination4.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          Sydney
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <Link to={"/"}>
                  <div className="relative group bg-[url(/src/assets/destination5.webp)] bg-no-repeat bg-cover bg-center ">
                    <div className="py-[200px] px-[150px] hover:bg-black/25 transition-all duration-300">
                      {/* ------------------- */}
                      <div className="absolute w-full top-7.5 left-1/2 transform -translate-x-1/2 text-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Para>14 Hotel - 22 Cars - 18 Tours - 95 Activity</Para>
                      </div>
                      {/* ------------------- */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                        <p className="text-[26px] text-white font-semibold group-hover:-translate-y-4 transition-all duration-300">
                          Rome
                        </p>
                        <div className="py-5 px-[100px] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <p className="text-[15px] text-textClr1 font-medium">
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="custom-progressbar h-1 bg-gray-300 rounded-full absolute left-0 bottom-0 overflow-hidden z-10"></div>
        </div>
      </Container>
    </section>
  );
};

export default Destination;
