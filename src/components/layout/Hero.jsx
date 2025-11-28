import React from "react";
import ParaBase from "../ParaBase";
import Container from "../Container";

const Hero = () => {
  return (
    <>
      <section className="bg-[url(/src/assets/bannerBg.png)] bg-no-repeat bg-cover bg-center py-14 lg:pt-[375px] pt-10 lg:pb-[295px]">
        <Container>
          <div className="text-center">
            <h1 className="font-semibold text-4xl lg:text-6xl text-white">
              The World is Waiting For You
            </h1>
            <ParaBase className={"font-normal"}>
              Discover amzaing places at exclusive deals
            </ParaBase>
            <div className=""></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
