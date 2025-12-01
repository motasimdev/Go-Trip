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
import Para from "../Para";
import Heading from "../Heading";
import CardThree from "../CardThree";
import desPicOne from "/src/assets/recommandedDes1.jpg";
import desPicTwo from "/src/assets/recommandedDes2.jpg";
import desPicThree from "/src/assets/recommandedDes3.jpg";

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
            <div className="mb-8 md:mb-0 lg:mb-11 text-center md:text-left">
              <Heading
                title={"Recommended Hotels"}
                subTitle={"Interdum et malesuada fames ac ante ipsum"}
              />
            </div>

            {/* ======================================================= */}
            <div className="relative">
              <Swiper
                className="mySwiper relative"
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                  clickable: true,
                }}
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
                      <CardThree cardPic={desPicOne} badgTxt={"Breakfast included"} placeTitle={"The Montcalm At Brewery London City"} city={"Westminster Borough, London"}/>
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
