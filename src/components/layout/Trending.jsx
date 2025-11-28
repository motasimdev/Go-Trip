import React from "react";
import Container from "../Container";
import Card from "../Card";
import cardImgOne from "/src/assets/trendy1.png";
import Heading from "../Heading";
import Flex from "../Flex";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Trending = () => {
  return (
    <>
      <section>
        <Container className="">
          <div className="">
            <div className="text-center mb-11">
              <Heading
                title={"Trending Activity"}
                subTitle={"Interdum et malesuada fames ac ante ipsum"}
              />
            </div>
            {/* <div className="grid grid-cols-4">
              
            </div> */}
            <Splide aria-label="My Favorite Images">
              <SplideSlide>
                <Card
                  badgTxt={"LIKELY TO SELL OUT*"}
                  cardPic={cardImgOne}
                  city={
                    "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip"
                  }
                  placeTitle={"Westminster Borough, London"}
                />
              </SplideSlide>
              <SplideSlide>
                <Card
                  badgTxt={"LIKELY TO SELL OUT*"}
                  cardPic={cardImgOne}
                  city={
                    "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip"
                  }
                  placeTitle={"Westminster Borough, London"}
                />
              </SplideSlide>
              <SplideSlide>
                <Card
                  badgTxt={"LIKELY TO SELL OUT*"}
                  cardPic={cardImgOne}
                  city={
                    "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip"
                  }
                  placeTitle={"Westminster Borough, London"}
                />
              </SplideSlide>
            </Splide>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Trending;
