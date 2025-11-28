import React from "react";
import Container from "../Container";
import Card from "../Card";
import Heading from "../Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import cardImgOne from "/src/assets/trendy1.png";
import cardImgTwo from "/src/assets/trendy2.png";
import cardImgThree from "/src/assets/trendy3.png";
import cardImgeFour from "/src/assets/trendy4.png";

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
            <Splide
              aria-label="My Favorite Images"
              options={{
                type: "loop",
                perPage: 4,
                perMove: 1,
                autoWidth: true,
                gap: "90px",
                autoplay: true,
                interval: 2500,
                pauseOnHover: true,
                arrows: true,
                pagination: false,
                speed: 800,
                breakpoints: {
                  1024: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
            >
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
                  cardPic={cardImgTwo}
                  city={
                    "Edinburgh Sky to Sea Bike Tour by Manual or E-Bike"
                  }
                  placeTitle={"Westminster Borough, London"}
                />
              </SplideSlide>
              <SplideSlide>
                <Card 
                  badgTxt={"BEST SELLER"}
                  cardPic={cardImgThree}
                  city={
                    "Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier"
                  }
                  placeTitle={"Manhattan, New York"}
                />
              </SplideSlide>
              <SplideSlide>
                <Card 
                  badgTxt={"TOP RATED"}
                  cardPic={cardImgeFour}
                  city={
                    "South Coast Full Day Tour by Minibus from Reykjavik"
                  }
                  placeTitle={"Vaticano Prati, Rome"}
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
