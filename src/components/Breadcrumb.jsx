import React from "react";
import Para from "./Para";
import { RxCaretRight } from "react-icons/rx";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router";

const Breadcrumb = ({pageOne, pageTwo, pageThree , pageOneLink, pageTwoLink, pageThreeLink}) => {
  return (
    <>
      <section className="py-2 px-3 lg:px-0 lg:pt-[115px] lg:pb-5">
        <Container>
          <div className={"md:flex items-center justify-between"}>
            <Para className={"text-textClr2!"}>
              <Flex>
                <Link to={pageOneLink} className="cursor-pointer">{pageOne}</Link>{" "}
                <RxCaretRight className="text-lg" />{" "}
                <Link to={pageTwoLink} className="cursor-pointer">{pageTwo }(UK)</Link>{" "}
                <RxCaretRight className="text-lg" />{" "}
                <Link to={pageThreeLink} className="text-textClr1 cursor-pointer">{pageThree}</Link>
              </Flex>
            </Para>
            <Para className={"text-textClr2!"}>
              London Tourism: Best of London
            </Para>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Breadcrumb;
