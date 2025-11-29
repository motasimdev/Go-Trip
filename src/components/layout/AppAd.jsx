import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import app from "/src/assets/app.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Button from "../Button";
import Para from "../Para";
import ParaBase from "../ParaBase";

const AppAd = () => {
  return (
    <>
      <section className="py-7.5 lg:pt-[120px] lg:pb-15 px-3 lg:px-0">
        <Container>
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-[50%]">
              <img src={app} alt="" className="w-full" />
            </div>
            {/* =============== */}
            <div className="lg:w-[43%] text-center lg:text-left">
              <h3 className="pt-5 lg:pt-0 text-3xl lg:text-[40px] text-textClr1 font-semibold">Your <span className="text-textClr3">all-in-one</span> travel app.</h3>
              <p className="text-[15px] pt-4 lg:pt-11 pb-9 text-textClr2 lg:pr-10">
                Book in advance or last-minute with GoTrip. Receive instant
                confirmation. Access your booking info offline.
              </p>
              <Flex className={"gap-x-6"}>
                <Button className={"bg-textClr1"}>
                  <Flex className={"gap-x-3"}>
                    <FaApple className="text-white text-2xl lg:text-4xl" />
                    <div className="lg:pl-4">
                      <Para>Download on the</Para>
                      <ParaBase className={"lg:text-[15px]"}>
                        Apple Store
                      </ParaBase>
                    </div>
                  </Flex>
                </Button>
                <Button className={"bg-textClr1"}>
                  <Flex className={"gap-x-3"}>
                    <FaGooglePlay className="text-white text-2xl lg:text-4xl" />
                    <div className="lg:pl-4">
                      <Para>Get in on</Para>
                      <ParaBase className={"lg:text-[15px]"}>
                        Google Play
                      </ParaBase>
                    </div>
                  </Flex>
                </Button>
              </Flex>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AppAd;
