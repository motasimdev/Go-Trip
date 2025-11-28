import React from "react";
import Container from "./Container";
import Heading from "./Heading";

const SpecialOffers = () => {
  return (
    <>
      <section className="pt-[120px] pb-15 ">
        <Container>
          <div className="text-center">
            <Heading
              title={"Special Offers"}
              subTitle={"These popular destinations have a lot to offer"}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default SpecialOffers;
