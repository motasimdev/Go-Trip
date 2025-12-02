import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import insOne from "/src/assets/Des-topsight1.png";
import { Link } from "react-router";
import Para from "../../Para";

const Des_topSights = () => {
  return (
    <>
      <section className="py-7.5 lg:py-20 px-3 lg:px-0">
        <Container>
          <div className="">
            <div
              className="mb-8 md:mb-9 lg:mb-11 text-center md:text-left"
              data-aos="fade-up"
            >
              <Heading
                title={"Top sights in London"}
                subTitle={"Interdum et malesuada fames ac ante ipsum"}
              />
            </div>
            {/* ============================================ */}
            <div className="lg:flex items-center justify-between">
              <div
                className="md:flex items-center justify-between lg:w-[48%] pb-10 lg:pb-0 border border-[#dddddd]"
                data-aos="fade-up"
                data-aos-offset="130"
              >
                <div className="md:w-[33%] lg:w-[30%]">
                  <img src={insOne} alt="" className="w-full h-full" />
                </div>
                <div className="text-center md:text-left pt-5 md:pt-0 md:w-[65%] md:pr-17">
                  {/* <p className="text-[15px] text-textClr2">April 06, 2022</p> */}
                  <h4 className="text-[22px] text-textClr1 font-semibold">
                    The British Museum
                  </h4>
                  <p className="text-[15px] text-textClr2">
                    Learn about British history at the Tower of London, a
                    medieval castle that was first built in 1066 by William the
                    Conqueror.
                  </p>
                  <Link>
                    <span className="text-textClr3 text-[12px] lg:text-sm hover:border-b border-b border-textClr3 font-medium">
                      see more
                    </span>
                  </Link>
                </div>
              </div>

              {/*  */}

              {/* ================================= */}

              <div
                className="md:flex items-center justify-between lg:w-[48%] border border-[#dddddd]"
                data-aos="fade-up"
                data-aos-offset="130"
              >
                <div className="md:w-[33%] lg:w-[30%]">
                  <img src={insOne} alt="" className="w-full" />
                </div>
                <div className="text-center md:text-left pt-5 md:pt-0 md:w-[65%] md:pr-17">
                  {/* <p className="text-[15px] text-textClr2">April 06, 2022</p> */}
                  <h4 className="text-[22px] text-textClr1 font-semibold">
                    London Eye
                  </h4>
                  <p className="text-[15px] text-textClr2">
                    Learn about British history at the Tower of London, a
                    medieval castle that was first built in 1066 by William the
                    Conqueror.
                  </p>
                  <Link>
                    <span className="text-textClr3 text-[12px] lg:text-sm hover:border-b border-b border-textClr3 font-medium">
                      see more
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Des_topSights;
