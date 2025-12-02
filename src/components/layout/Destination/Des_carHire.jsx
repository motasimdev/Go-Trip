import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import desPicOne from "/src/assets/Des-carHire.png";
import desPicTwo from "/src/assets/Des-carHire.png";
import desPicThree from "/src/assets/Des-carHire.png";
import desPicFour from "/src/assets/Des-carHire.png";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import Container from "../../Container";
import Heading from "../../Heading";
import CardThree from "../../CardThree";
const Des_carHire = () => {
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
                title={"Popular Car Hire"}
                subTitle={"Interdum et malesuada fames ac ante ipsum"}
              />
            </div>

            {/* ======================================================= */}
            <div className="relative">
              <div className="py-3 px-3 bg-white rounded-full absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 cursor-pointer shadow-md">
                <FaChevronLeft className="text-black custom-prev text-xl" />
              </div>
              <div className="py-3 px-3 bg-white rounded-full absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 cursor-pointer shadow-md">
                <FaChevronRight className="text-black custom-next text-xl" />
              </div>
              <Swiper
                className="mySwiper relative"
                spaceBetween={30}
                centeredSlides={false}
                loop={true}
                arrows={false}
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
                    <Link to={"/"}>
                      <CardThree
                        cardPic={desPicOne}
                        badgTxt={"Breakfast included"}
                        city={"Heathrow Airport . LUXURY"}
                        placeTitle={
                          <>
                            Mercedes-Benz E-Class
                            <span className="text-[15px] text-textClr2">
                              {" "}
                              or similar
                            </span>
                          </>
                        }
                        subTitle={"2 guests1 . bedroom . 1 bed"}
                      />
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <Link to={"/"}>
                      <CardThree
                        cardPic={desPicTwo}
                        badgTxt={"Breakfast included"}
                        city={"Ciutat Vella, Barcelona"}
                        placeTitle={
                          <>
                            Mercedes-Benz E-Class
                            <span className="text-[15px] text-textClr2">
                              {" "}
                              or similar
                            </span>
                          </>
                        }
                        subTitle={""}
                      />
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <Link to={"/"}>
                      <CardThree
                        cardPic={desPicThree}
                        badgTxt={"Best Seller"}
                        city={"Manhattan, New York"}
                        placeTitle={
                          <>
                            Jaguar F-Pace
                            <span className="text-[15px] text-textClr2">
                              {" "}
                              or similar
                            </span>
                          </>
                        }
                        subTitle={""}
                      />
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <Link to={"/"}>
                      <CardThree
                        cardPic={desPicFour}
                        badgTxt={"Top Rated"}
                        city={"Vaticano Prati, Rome"}
                        placeTitle={
                          <>
                            Volvo XC90
                            <span className="text-[15px] text-textClr2">
                              {" "}
                              or similar
                            </span>
                          </>
                        }
                        subTitle={""}
                      />
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <Link to={"/"}>
                      <CardThree
                        cardPic={desPicOne}
                        badgTxt={"Top Rated"}
                        city={"Vaticano Prati, Rome"}
                        placeTitle={
                          <>
                           BMW 5 Series
                            <span className="text-[15px] text-textClr2">
                              {" "}
                              or similar
                            </span>
                          </>
                        }
                        subTitle={""}
                      />
                    </Link>
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

export default Des_carHire;
