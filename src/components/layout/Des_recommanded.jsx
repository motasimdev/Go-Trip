import React from "react";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import Heading from "../Heading";
import CardThree from "../CardThree";
import desPicOne from "/src/assets/recommandedDes1.jpg";
import desPicTwo from "/src/assets/recommandedDes2.jpg";
import desPicThree from "/src/assets/recommandedDes3.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Des_recommanded = () => {
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
                title={"Recommended Hotels"}
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
                    <Link to={"/"}>
                      <CardThree
                        cardPic={desPicOne}
                        badgTxt={"Breakfast included"}
                        placeTitle={"The Montcalm At Brewery London City"}
                        subTitle={"Westminster Borough, London"}
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
                        placeTitle={
                          "Staycity Aparthotels Deptford Bridge Station"
                        }
                        subTitle={"Ciutat Vella, Barcelona"}
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
                        placeTitle={"The Westin New York at Times Square"}
                        subTitle={"Manhattan, New York"}
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
                        placeTitle={
                          "DoubleTree by Hilton Hotel New York Times Square West"
                        }
                        subTitle={"Vaticano Prati, Rome"}
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
                        placeTitle={
                          "DoubleTree by Hilton Hotel New York Times Square West"
                        }
                        subTitle={"Vaticano Prati, Rome"}
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

export default Des_recommanded;
