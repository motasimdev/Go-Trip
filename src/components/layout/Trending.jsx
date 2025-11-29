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

const Trending = () => {
  return (
    <>
      <section className="py-7.5 lg:pt-[120px] lg:pb-15 px-3 lg:px-0">
        <Container className="">
          <div className="">
            <div className="mb-8 text-center lg:mb-11">
              <Heading
                title={"Trending Activity"}
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
                      cardPic={cardImgOne}
                      city={
                        "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip"
                      }
                      placeTitle={"Westminster Borough, London"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={cardImgOne}
                      city={
                        "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip"
                      }
                      placeTitle={"Westminster Borough, London"}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={cardImgTwo}
                      city={
                        "Edinburgh Sky to Sea Bike Tour by Manual or E-Bike"
                      }
                      placeTitle={"Westminster Borough, London"}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"BEST SELLER"}
                      cardPic={cardImgThree}
                      city={
                        "Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier"
                      }
                      placeTitle={"Manhattan, New York"}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"TOP RATED"}
                      cardPic={cardImgeFour}
                      city={
                        "South Coast Full Day Tour by Minibus from Reykjavik"
                      }
                      placeTitle={"Vaticano Prati, Rome"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <Card
                      badgTxt={"LIKELY TO SELL OUT*"}
                      cardPic={cardImgOne}
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

export default Trending;
