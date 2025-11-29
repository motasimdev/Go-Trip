import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { MdOutlineArrowOutward } from "react-icons/md";
import Heading from "../Heading";
import { Link } from "react-router";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import cardImgOne from "/src/assets/trendy1.png";
import cardImgTwo from "/src/assets/trendy2.png";
import cardImgThree from "/src/assets/trendy3.png";
import cardImgeFour from "/src/assets/trendy4.png";
import Card from "../Card";

const Destination = () => {
  return (
    <section className="pt-15 lg:pt-[120px] lg:pb-15 px-3 lg:px-0">
      <Container>
        <div className={"mb-8 lg:mb-11 md:flex justify-between"}>
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Heading
              title={"Popular Destinations"}
              subTitle={"These popular destinations have a lot to offer"}
            />
          </div>
          <Link to={"/"}>
            <Flex className="bg-textClr3/5 py-3.5 px-7.5 gap-3 curpo">
              <p className="text-[15px] text-textClr3 font-medium">
                View All Destinations
              </p>
              <MdOutlineArrowOutward className="text-textClr3" />
            </Flex>
          </Link>
        </div>
        {/* ================================================= */}
        <div className="">
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              // gap: "90px",
              autoplay: true,
              interval: 2500,
              pauseOnHover: true,
              arrows: false,
              pagination: true,
              speed: 800,
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
          >
            {/* <SplideSlide> */}
            <div className="w-full flex justify-center">
              <Link to={"/"}>
                <div className="group bg-[url(/src/assets/destination1.webp)] bg-no-repeat bg-cover bg-center ">
                  <div className="py-[200px] px-[150px] hover:bg-black/25">
                    <div className="absolute bottom-0 left-1/2 transform -translate-1/2 ">
                      <p className="text-[26px] text-white font-semibold ">
                        New York
                      </p>
                      <div className="py-5 px-[100px] bg-white">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* </SplideSlide> */}
          </Splide>
        </div>
      </Container>
    </section>
  );
};

export default Destination;
