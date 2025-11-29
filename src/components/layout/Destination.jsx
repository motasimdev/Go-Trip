import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Destination = () => {
  return (
    <section>
      <Container>
        <Flex className={"mb-8 lg:mb-11 justify-between"}>
          <div className="">
            <Heading
              title={"Trending Activity"}
              subTitle={"Interdum et malesuada fames ac ante ipsum"}
            />
          </div>
          <Flex className="">
            <p className="text-[15px] text-textClr3 font-medium">View All Destinations</p>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Destination;
