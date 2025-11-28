import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import specialOne from "/src/assets/specialOffer1.png";
import Button from "./Button";

const SpecialOffers = () => (
  <>
    <section className="pt-15 lg:pt-[120px] lg:pb-15 px-3 lg:px-0">
      <Container>
        <div>
          <div className="text-center mb-11">
            <Heading
              title={"Special Offers"}
              subTitle={"These popular destinations have a lot to offer"}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[url(/src/assets/specialOffer1.png)] bg-no-repeat bg-center bg-cover px-11.5 pt-15 pb-[126px] rounded-sm">
              <h4 className="pb-8 pr-[50px] text-2xl lg:text-[30px] text-white font-semibold">
                Things to do on your trip
              </h4>
              <Button className={"bg-white"}>Experinces</Button>
            </div>
            <div className="bg-[url(/src/assets/specialOffer2.png)] bg-no-repeat bg-center bg-cover px-11.5 pt-15 pb-[126px] rounded-sm">
            <h5 className="text-[15px] text-white font-medium">Enjoy Summer Deals</h5>
              <h4 className="pb-8 text-2xl lg:text-[30px] text-white font-semibold">
                Up to 70% Discount!
              </h4>
              <Button className={"bg-white"}>Experinces</Button>
            </div>
            <div className="bg-[url(/src/assets/specialOffer3.png)] bg-no-repeat bg-center bg-cover px-11.5 pt-15 pb-[126px] rounded-sm">
              <h4 className="pb-8 pr-[50px] text-2xl lg:text-[30px] text-white font-semibold">
                Let your curiosity do the booking
              </h4>
              <Button className={"bg-white"}>Experinces</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default SpecialOffers;
