import Flex from "@/components/Flex";
import React from "react";
import user from "/src/assets/blog/user.png";
import ParaBase from "@/components/ParaBase";
import Para from "@/components/Para";
import Para15 from "@/components/Para15";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import { BsGrid3X3GapFill } from "react-icons/bs";
const Blog_testimonial = () => {
  return (
    <>
      <section className="py-2 lg:pt-6 px-3 lg:px-0">
        <div className="max-w-[850px] m-auto">
          <div className={"flex gap-x-5 border-t border-b py-4 lg:py-7"}>
            <div className="h-[70px] w-[70px] overflow-hidden">
              <img src={user} alt="user" className="w-full" />
            </div>
            <div className="">
              <ParaBase
                text={"Brooklyn Simmons"}
                className={"text-textClr1! text-lg!"}
              />
              <Para text={"Medical Assistant"} className={"text-textClr2!"} />
              <Para15
                text={
                  "Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus."
                }
                className={
                  "pt-3 lg:pt-5 text-textClr1! max-w-[670px] line-clamp-3 lg:line-clamp-none text-justify"
                }
              />
            </div>
          </div>
          <Flex className="justify-between border-b py-4 lg:py-7">
            <Link>
              <div className="flex gap-x-5">
                <FaArrowLeftLong className="mt-1 hover:text-textClr3 transition-all duration-200" />
                <div className="max-w-[184px]">
                  <ParaBase
                    text={"Prev"}
                    className={"text-lg! text-textClr1! pb-1 "}
                  />
                  <Para15
                    text={"5 awesome steps to get rid of stress and routine"}
                    className={"text-textClr1!"}
                  />
                </div>
              </div>
            </Link>

            {/* ==================== */}

            <div className="">
                <BsGrid3X3GapFill  className="text-2xl"/>
            </div>

            {/* ===================== */}

            <Link>
              <div className="flex gap-x-5">
                <div className="max-w-[184px] text-end">
                  <ParaBase
                    text={"Next"}
                    className={"text-lg! text-textClr1! pb-1 "}
                  />
                  <Para15
                    text={"Happy clients leave positive feedback less often"}
                    className={"text-textClr1!"}
                  />
                </div>
                <FaArrowRightLong className="mt-1 hover:text-textClr3 transition-all duration-200" />
              </div>
            </Link>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Blog_testimonial;
