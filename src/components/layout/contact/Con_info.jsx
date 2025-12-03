import Container from "@/components/Container";
import React from "react";

const Con_info = () => {
  return (
    <>
      <section className="">
        <Container>
          <div className="pt-15">
            <h3 className="text-3xl text-textClr1 font-semibold">Contact Us</h3>
            <div className="grid grid-cols-4">
              <div className="">
                <ParaBase
                  text={"Address"}
                  className={"text-textClr2! font-normal"}
                />
                <p className="text-lg text-textClr1 font-medium pt-1">
                  328 Queensberry Street, <br /> North Melbourne VIC 3051,{" "}
                  <br /> Australia.
                </p>
              </div>
              <div className="">
                <ParaBase
                  text={"Toll Free Customer Care"}
                  className={"text-textClr2! font-normal"}
                />
                <p className="text-lg text-textClr1 font-medium pt-1">
                  +(1) 123 456 7890
                </p>
              </div>
              <div className="">
                <ParaBase
                  text={"Need live support?"}
                  className={"text-textClr2! font-normal"}
                />
                <p className="text-lg text-textClr1 font-medium pt-1">
                  hi@gotrip.com
                </p>
              </div>
              <div className="">
                <ParaBase
                  text={"Follow us on social media"}
                  className={"text-textClr2! font-normal"}
                />
                {/* ====================icons================ */}
                <Flex className={"gap-x-1 "}>
                  <Link>
                    <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                      <FaFacebookF className="text-white" />
                    </div>
                  </Link>
                  <Link>
                    <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                      <IoLogoTwitter className="text-white" />
                    </div>
                  </Link>
                  <Link>
                    <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                      <FaInstagram className="text-white" />
                    </div>
                  </Link>
                  <Link>
                    <div className="py-2 px-2 lg:py-4 lg:px-4 rounded-full hover:bg-[#ffffff5a] transition-colors duration-300">
                      <FaLinkedinIn className="text-white" />
                    </div>
                  </Link>
                </Flex>
                {/* ====================icons================ */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Con_info;
