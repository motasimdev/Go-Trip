import Flex from "@/components/Flex";
import ParaBase from "@/components/ParaBase";
import React from "react";
import user from "/src/assets/blog/user.png";
import Para from "@/components/Para";
import Para15 from "@/components/Para15";
import reviwPicOne from "/src/assets/blog/mini.png";
import reviwPicTwo from "/src/assets/blog/miniTwo.png";
import reviwPicThree from "/src/assets/blog/miniThree.png";
import reviwPicFour from "/src/assets/blog/miniFour.png";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Link } from "react-router";
import Button from "@/components/Button";
import { MdOutlineArrowOutward } from "react-icons/md";

const Blog_review = () => {
  return (
    <>
      <section className="py-2 lg:pt-6 px-3 lg:px-0">
        <div className="max-w-[850px] m-auto">
          <h6 className="pb-4 text-lg font-medium md:text-[22px] text-textClr1">
            Guest reviews
          </h6>
          <div className="flex flex-col gap-y-8 border-b pb-10">
            <div className="">
              <Flex className="gap-x-3">
                <div className="w-10 lg:h-[70px] h-10 lg:w-[70px] overflow-hidden">
                  <img src={user} alt="user" className="w-full" />
                </div>
                <div className="">
                  <ParaBase text={"Tonko"} className={"text-textClr1!"} />
                  <Para text={"March 2022"} className={"text-textClr2!"} />
                </div>
              </Flex>

              <ParaBase
                text={"9.2 Superb"}
                className={"text-textClr3! py-3 lg:py-5"}
              />
              <Para15
                text={
                  "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. "
                }
                className={"text-textClr1"}
              />
              <Flex className={"gap-x-3 lg:gap-x-5 py-3 lg:py-6"}>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img src={reviwPicOne} alt="" className="w-full rounded-md" />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img src={reviwPicTwo} alt="" className="w-full rounded-md" />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img
                    src={reviwPicThree}
                    alt=""
                    className="w-full rounded-md"
                  />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img
                    src={reviwPicFour}
                    alt=""
                    className="w-full rounded-md"
                  />
                </div>
              </Flex>

              {/* ========================= */}

              <Flex className={"gap-x-7"}>
                <Link>
                  <Flex className={"gap-x-2 lg:gap-x-3"}>
                    <AiFillLike className="text-textClr2" />
                    <Para15 text={"Helpful "} className={"text-textClr2!"} />
                  </Flex>
                </Link>
                <Link>
                  <Flex className={"gap-x-2 lg:gap-x-3"}>
                    <AiFillDislike className="text-textClr2" />
                    <Para15
                      text={"Not helpful "}
                      className={"text-textClr2!"}
                    />
                  </Flex>
                </Link>
              </Flex>
            </div>
            <div className="">
              <Flex className="gap-x-3">
                <div className="w-10 lg:h-[70px] h-10 lg:w-[70px] overflow-hidden">
                  <img src={user} alt="user" className="w-full" />
                </div>
                <div className="">
                  <ParaBase text={"Tonko"} className={"text-textClr1!"} />
                  <Para text={"March 2022"} className={"text-textClr2!"} />
                </div>
              </Flex>

              <ParaBase
                text={"9.2 Superb"}
                className={"text-textClr3! py-3 lg:py-5"}
              />
              <Para15
                text={
                  "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. "
                }
                className={"text-textClr1"}
              />
              <Flex className={"gap-x-3 lg:gap-x-5 py-3 lg:py-6"}>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img src={reviwPicOne} alt="" className="w-full rounded-md" />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img src={reviwPicTwo} alt="" className="w-full rounded-md" />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img
                    src={reviwPicThree}
                    alt=""
                    className="w-full rounded-md"
                  />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img
                    src={reviwPicFour}
                    alt=""
                    className="w-full rounded-md"
                  />
                </div>
              </Flex>

              {/* ========================= */}

              <Flex className={"gap-x-7"}>
                <Link>
                  <Flex className={"gap-x-2 lg:gap-x-3"}>
                    <AiFillLike className="text-textClr2" />
                    <Para15 text={"Helpful "} className={"text-textClr2!"} />
                  </Flex>
                </Link>
                <Link>
                  <Flex className={"gap-x-2 lg:gap-x-3"}>
                    <AiFillDislike className="text-textClr2" />
                    <Para15
                      text={"Not helpful "}
                      className={"text-textClr2!"}
                    />
                  </Flex>
                </Link>
              </Flex>
            </div>
            <div className="">
              <Flex className="gap-x-3">
                <div className="w-10 lg:h-[70px] h-10 lg:w-[70px] overflow-hidden">
                  <img src={user} alt="user" className="w-full" />
                </div>
                <div className="">
                  <ParaBase text={"Tonko"} className={"text-textClr1!"} />
                  <Para text={"March 2022"} className={"text-textClr2!"} />
                </div>
              </Flex>

              <ParaBase
                text={"9.2 Superb"}
                className={"text-textClr3! py-3 lg:py-5"}
              />
              <Para15
                text={
                  "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. "
                }
                className={"text-textClr1"}
              />
              <Flex className={"gap-x-3 lg:gap-x-5 py-3 lg:py-6"}>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img src={reviwPicOne} alt="" className="w-full rounded-md" />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img src={reviwPicTwo} alt="" className="w-full rounded-md" />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img
                    src={reviwPicThree}
                    alt=""
                    className="w-full rounded-md"
                  />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img
                    src={reviwPicFour}
                    alt=""
                    className="w-full rounded-md"
                  />
                </div>
              </Flex>

              {/* ========================= */}

              <Flex className={"gap-x-7"}>
                <Link>
                  <Flex className={"gap-x-2 lg:gap-x-3"}>
                    <AiFillLike className="text-textClr2" />
                    <Para15 text={"Helpful "} className={"text-textClr2!"} />
                  </Flex>
                </Link>
                <Link>
                  <Flex className={"gap-x-2 lg:gap-x-3"}>
                    <AiFillDislike className="text-textClr2" />
                    <Para15
                      text={"Not helpful "}
                      className={"text-textClr2!"}
                    />
                  </Flex>
                </Link>
              </Flex>
            </div>
            <div className="">
              <Flex className="gap-x-3">
                <div className="w-10 lg:h-[70px] h-10 lg:w-[70px] overflow-hidden">
                  <img src={user} alt="user" className="w-full" />
                </div>
                <div className="">
                  <ParaBase text={"Tonko"} className={"text-textClr1!"} />
                  <Para text={"March 2022"} className={"text-textClr2!"} />
                </div>
              </Flex>

              <ParaBase
                text={"9.2 Superb"}
                className={"text-textClr3! py-3 lg:py-5"}
              />
              <Para15
                text={
                  "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. "
                }
                className={"text-textClr1"}
              />
              <Flex className={"gap-x-3 lg:gap-x-5 py-3 lg:py-6"}>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img src={reviwPicOne} alt="" className="w-full rounded-md" />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img src={reviwPicTwo} alt="" className="w-full rounded-md" />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img
                    src={reviwPicThree}
                    alt=""
                    className="w-full rounded-md"
                  />
                </div>
                <div className="w-20 h-20 lg:w-[120px] lg:h-[120px]">
                  <img
                    src={reviwPicFour}
                    alt=""
                    className="w-full rounded-md"
                  />
                </div>
              </Flex>

              {/* ========================= */}

              <Flex className={"gap-x-7"}>
                <Link>
                  <Flex className={"gap-x-2 lg:gap-x-3"}>
                    <AiFillLike className="text-textClr2" />
                    <Para15 text={"Helpful "} className={"text-textClr2!"} />
                  </Flex>
                </Link>
                <Link>
                  <Flex className={"gap-x-2 lg:gap-x-3"}>
                    <AiFillDislike className="text-textClr2" />
                    <Para15
                      text={"Not helpful "}
                      className={"text-textClr2!"}
                    />
                  </Flex>
                </Link>
              </Flex>
            </div>
            <Link to={"/"}>
              <div className="inline-flex bg-textClr3/5 py-3.5 px-7.5 gap-3 curpo group hover:bg-textClr3 transition-colors duration-200 rounded-sm">
                <p className=" text-[15px] text-textClr3 font-medium group-hover:text-white transition-colors duration-200">
                  Show all 116 reviews
                  
                </p>
                <MdOutlineArrowOutward className="text-textClr3 group-hover:text-white transition-colors duration-200" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog_review;
