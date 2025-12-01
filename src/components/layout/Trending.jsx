import React from "react";
import Container from "../Container";
import Card from "../Card";
import Heading from "../Heading";
import cardImgOne from "/src/assets/trendy1.png";
import cardImgTwo from "/src/assets/trendy2.png";
import cardImgThree from "/src/assets/trendy3.png";
import cardImgeFour from "/src/assets/trendy4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import CardTwo from "../CardTwo";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Trending = () => {
  AOS.init();
  AOS.init({
    duration: 800,
    offset: 200,
  });

  return (
    <>
      <section className="py-7.5 lg:pt-[120px] lg:pb-15 px-3 lg:px-0">
        <Container className="">
          <div className="">
            <div className="mb-8 text-center lg:mb-11" data-aos="fade-up">
              <Heading
                title={"Trending Activity"}
                subTitle={"Interdum et malesuada fames ac ante ipsum"}
              />
            </div>
            <div className="relative">
              <div className="py-3 px-3 bg-white rounded-full absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 cursor-pointer shadow-md">
                <FaChevronLeft className="custom-prev text-xl " />
              </div>
              <div className="py-3 px-3 bg-white rounded-full absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 cursor-pointer shadow-md">
                <FaChevronRight className="custom-next text-xl" />
              </div>
              <Swiper
                spaceBetween={30}
                centeredSlides={false}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
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
                    <CardTwo
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={cardImgOne}
                      city={"Westminster Borough, London"}
                      placeTitle={
                        "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip"
                      }
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <CardTwo
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={cardImgTwo}
                      city={"Westminster Borough, London"}
                      placeTitle={
                        "Edinburgh Sky to Sea Bike Tour by Manual or E-Bike"
                      }
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <CardTwo
                      badgTxt={"BEST SELLER"}
                      cardPic={cardImgThree}
                      city={"Manhattan, New York"}
                      placeTitle={
                        "Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier"
                      }
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <CardTwo
                      badgTxt={"TOP RATED"}
                      cardPic={cardImgeFour}
                      city={"Vaticano Prati, Rome"}
                      placeTitle={
                        "South Coast Full Day Tour by Minibus from Reykjavik"
                      }
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-offset="130"
                  >
                    <CardTwo
                      badgTxt={"LIKELY TO SELL OUT"}
                      cardPic={cardImgOne}
                      city={"Westminster Borough, London"}
                      placeTitle={
                        "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip"
                      }
                    />
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

export default Trending;
