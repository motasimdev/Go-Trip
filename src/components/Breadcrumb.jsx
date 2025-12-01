import React from "react";
import Para from "./Para";
import { RxCaretRight } from "react-icons/rx";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router";

const Breadcrumb = () => {
  return (
    <>
      <section className="pt-[115px]">
        <Container>
          <Flex className={"justify-between"}>
            <Para className={"text-textClr2!"}>
              <Flex>
                <Link className="cursor-pointer">Europe</Link>{" "}
                <RxCaretRight className="text-lg" />{" "}
                <Link className="cursor-pointer">United Kingdom (UK)</Link>{" "}
                <RxCaretRight className="text-lg" />{" "}
                <Link className="text-textClr1 cursor-pointer">London</Link>
              </Flex>
            </Para>
            <Para className={"text-textClr2!"}>
              London Tourism: Best of London
            </Para>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Breadcrumb;
