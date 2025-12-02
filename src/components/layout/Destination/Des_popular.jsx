import React from "react";
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
import Container from "../../Container";
import Heading from "../../Heading";
import CardTwo from "../../CardTwo";

const Des_popular = () => {
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
            <div className="mb-8 md:mb-0 lg:mb-11 text-center md:text-left" data-aos="fade-up">
              <Heading
                title={"Most Popular Tours"}
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
                      <CardTwo
                        cardPic={cardOne}
                        badgTxt={"Breakfast included"}
                        placeTitle={"The Montcalm At Brewery London CityStonehenge, Windsor Castle and Bath with Pub Lunch in Lacock"}
                        city={"Westminster Borough, London"}
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
                      <CardTwo
                        cardPic={cardTwo}
                        badgTxt={"Breakfast included"}
                        placeTitle={
                          "Westminster Walking Tour & Westminster Abbey Entry"
                        }
                        city={"Ciutat Vella, Barcelona"}
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
                      <CardTwo
                        cardPic={cardThree}
                        badgTxt={"Best Seller"}
                        placeTitle={"High-Speed Thames River RIB Cruise in London"}
                        city={"Manhattan, New York"}
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
                      <CardTwo
                        cardPic={cardThree}
                        badgTxt={"Top Rated"}
                        placeTitle={
                          "Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends"
                        }
                        city={"Vaticano Prati, Rome"}
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
                      <CardTwo
                        cardPic={cardOne}
                        badgTxt={"Top Rated"}
                        placeTitle={
                          "DoubleTree by Hilton Hotel New York Times Square West"
                        }
                        city={"Vaticano Prati, Rome"}
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

export default Des_popular;
