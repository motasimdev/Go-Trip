import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Button from "../Button";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialOffers = () => {
  AOS.init();
  AOS.init({
    duration: 800,
    offset: 200,
  });

  return (
    <>
      <section className="pt-15 lg:pt-[120px] lg:pb-15 px-3 lg:px-0">
        <Container>
          <div>
            <div className="text-center mb-11" data-aos="fade-up">
              <Heading
                title={"Special Offers"}
                subTitle={"These popular destinations have a lot to offer"}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-4 lg:gap-8">
              <div className="bg-[url(/src/assets/specialOffer1.png)] bg-no-repeat bg-center bg-cover px-8 md:px-8 lg:px-11.5 pt-15 pb-20 lg:pb-[126px] rounded-sm" data-aos="fade-up" data-aos-offset="130">
                <h4 className="pb-6 lg:pb-8 lg:pr-[50px] text-2xl lg:text-[30px] text-white font-semibold">
                  Things to do on your trip
                </h4>
                <Button
                  className={
                    "bg-white hover:bg-textClr3 hover:text-white transition-colors duration-300"
                  }
                >
                  Experinces
                </Button>
              </div>
              <div className="bg-[url(/src/assets/specialOffer2.png)] bg-no-repeat bg-center bg-cover px-8 md:px-8 lg:px-11.5 pt-15 pb-20 lg:pb-[126px] rounded-sm" data-aos="fade-up" data-aos-offset="130">
                <h5 className="text-[15px] text-white font-medium">
                  Enjoy Summer Deals
                </h5>
                <h4 className="pb-6 lg:pb-[50px] text-2xl lg:text-[30px] text-white font-semibold">
                  Up to 70% Discount!
                </h4>
                <Button
                  className={
                    "bg-white hover:bg-[#3554D1] hover:text-white transition-colors duration-300"
                  }
                >
                  Experinces
                </Button>
              </div>
              <div className="bg-[url(/src/assets/specialOffer3.png)] bg-no-repeat bg-center bg-cover px-8 md:px-5 lg:px-11.5 pt-15 pb-20 lg:pb-[126px] rounded-sm" data-aos="fade-up" data-aos-offset="130">
                <h4 className="pb-6 lg:pb-8 lg:pr-[50px] text-2xl lg:text-[30px] text-white font-semibold">
                  Let your curiosity do the booking
                </h4>
                <Button
                  className={
                    "bg-white hover:bg-[#3554D1] hover:text-white transition-colors duration-300"
                  }
                >
                  Experinces
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SpecialOffers;
