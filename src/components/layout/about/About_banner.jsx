import Container from "@/components/Container";
import ParaBase from "@/components/ParaBase";
import React from "react";

const About_banner = () => {
  return (
    <>
      <section className="py-16 lg:py-20 px-3 lg:px-0 bg-[url(/src/assets/about/1.png)]">
        <Container>
          <div className="text-center">
            <h3 className="font-semibold text-3xl lg:text-[40px] text-white pb-2 lg:pb-3">
              Looking for joy?
            </h3>
            <ParaBase text={"Your trusted trip companion"}/>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About_banner;
