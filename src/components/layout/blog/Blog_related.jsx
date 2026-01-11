import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import cardOne from "/src/assets/Des-populer1.png";
import cardTwo from "/src/assets/Des-populer2.png";
import cardThree from "/src/assets/Des-populer3.png";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import CardTwo from "@/components/CardTwo";
import Para15 from "@/components/Para15";

const Blog_related = () => {
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
                title={"Destinations near London"}
                subTitle={"Interdum et malesuada fames ac ante ipsum"}
              />
            </div>

            {/* ======================================================= */}
            <div className="relative">
              <div className="py-3 px-3 bg-white rounded-full absolute top-1/2 left-0 lg:-left-5 transform -translate-y-1/2 z-10 cursor-pointer shadow-md">
                <FaChevronLeft className="text-black custom-prev text-xl" />
              </div>
              <div className="py-3 px-3 bg-white rounded-full absolute top-1/2 right-0 lg:-right-5 transform -translate-y-1/2 z-10 cursor-pointer shadow-md">
                <FaChevronRight className="text-black custom-next text-xl" />
              </div>
              <Swiper
                className="mySwiper relative"
                spaceBetween={30}
                centeredSlides={false}
                loop={true}
                //arrow nai
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  1024: { slidesPerView: 4 },
                  768: { slidesPerView: 2 },
                  640: { slidesPerView: 1 },
                }}
              >
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <div
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-offset="130"
                    >
                      <div className="h-[200px]  overflow-hidden ">
                        <img
                          src={cardOne}
                          alt=""
                          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg text-textClr1 font-medium py-3">
                        London UK
                      </h4>
                      <Para15
                        text={"4,090 properties"}
                        className={"text-textClr2! "}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <div
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-offset="130"
                    >
                      <div className="h-[200px] overflow-hidden ">
                        <img
                          src={cardOne}
                          alt=""
                          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg text-textClr1 font-medium py-3">
                        Edinburgh, UK
                      </h4>
                      <Para15
                        text={"4,090 properties"}
                        className={"text-textClr2! "}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <div
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-offset="130"
                    >
                      <div className="h-[200px] overflow-hidden ">
                        <img
                          src={cardOne}
                          alt=""
                          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg text-textClr1 font-medium py-3">
                        Edinburgh, UK
                      </h4>
                      <Para15
                        text={"4,090 properties"}
                        className={"text-textClr2! "}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <div
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-offset="130"
                    >
                      <div className="h-[200px] overflow-hidden ">
                        <img
                          src={cardOne}
                          alt=""
                          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg text-textClr1 font-medium py-3">
                        Edinburgh, UK
                      </h4>
                      <Para15
                        text={"4,090 properties"}
                        className={"text-textClr2! "}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <div
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-offset="130"
                    >
                      <div className="h-[200px] overflow-hidden ">
                        <img
                          src={cardOne}
                          alt=""
                          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg text-textClr1 font-medium py-3">
                        Manchester, UK
                      </h4>
                      <Para15
                        text={"4,090 properties"}
                        className={"text-textClr2! "}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <div
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-offset="130"
                    >
                      <div className="h-[200px] overflow-hidden ">
                        <img
                          src={cardOne}
                          alt=""
                          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg text-textClr1 font-medium py-3">
                        Liverpool, UK
                      </h4>
                      <Para15
                        text={"4,090 properties"}
                        className={"text-textClr2! "}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <div
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-offset="130"
                    >
                      <div className="h-[200px] overflow-hidden ">
                        <img
                          src={cardOne}
                          alt=""
                          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg text-textClr1 font-medium py-3">
                        Birmingham, UK
                      </h4>
                      <Para15
                        text={"4,090 properties"}
                        className={"text-textClr2! "}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <div
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-offset="130"
                    >
                      <div className="h-[200px] overflow-hidden ">
                        <img
                          src={cardOne}
                          alt=""
                          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg text-textClr1 font-medium py-3">
                        Glasgow, UK
                      </h4>
                      <Para15
                        text={"4,090 properties"}
                        className={"text-textClr2! "}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog_related;
