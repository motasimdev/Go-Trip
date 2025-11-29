import React from "react";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Heading from "../Heading";
import Card from "../Card";
import recommandedOne from "/src/assets/recommanded.jpg";
import recommandedTwo from "/src/assets/recommanded2.jpg";
import recommandedThree from "/src/assets/recommanded3.jpg";
import recommandedFour from "/src/assets/recommanded4.jpg";

const Recommanded = () => {
  return (
    <>
      <section className="py-7.5 lg:pt-[120px] lg:pb-15 px-3 lg:px-0">
        <Container>
          <div className="">
            <div className="mb-8 text-center lg:mb-11">
              <Heading
                title={"Recommended Activity"}
                subTitle={"Interdum et malesuada fames ac ante ipsum"}
              />
            </div>
            <div className="">
              <Swiper
                spaceBetween={30}
                centeredSlides={false}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  1024: { slidesPerView: 5 },
                  768: { slidesPerView: 2 },
                  640: { slidesPerView: 1 },
                }}
              >
                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={recommandedOne}
                      city={
                        "Westminster Borough, London"
                      }
                      placeTitle={"Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={recommandedTwo}
                      city={
                        "Westminster Borough, London"
                      }
                      placeTitle={"Edinburgh Sky to Sea Bike Tour by Manual or E-Bike"}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={recommandedThree}
                      city={
                        "Manhattan, New York"
                      }
                      placeTitle={"Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier"}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"BEST SELLER"}
                      cardPic={recommandedTwo}
                      city={
                        "Vaticano Prati, Rome"
                      }
                      placeTitle={"South Coast Full Day Tour by Minibus from Reykjavik"}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"TOP RATED"}
                      cardPic={recommandedThree}
                      city={
                        "Westminster Borough, London"
                      }
                      placeTitle={"Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={recommandedOne}
                      city={
                        "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip"
                      }
                      placeTitle={"Westminster Borough, London"}
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

export default Recommanded;
