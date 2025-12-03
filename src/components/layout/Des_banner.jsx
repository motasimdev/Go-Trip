import React from "react";
import Container from "../Container";
import ParaBase from "../ParaBase";
import Button from "../Button";

const Des_banner = () => {
  return (
    <>
      <section className="">
        <Container>
          <div className="relative bg-[url(/src/assets/Des-banner.png)] bg-no-repeat bg-cover bg-center px-3 lg:px-0 lg:pr-0 lg:pl-11 pt-10 md:pt-16 lg:pt-[70px] pb-30 md:pb-35 lg:pb-[355px] ">
            <h1 className="text-3xl lg:text-[50px] text-white font-semibold">
              Explore London
            </h1>
            <ParaBase>
              Explore deals, travel guides and things to do in London
            </ParaBase>
            <Button
              className={
                "text-textClr1 bg-white hover:text-white hover:bg-textClr3 transition-colors duration-300 absolute right-3 bottom-3"
              }
            >
              See All 90 Photos
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Des_banner;
