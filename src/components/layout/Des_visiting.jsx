import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Para15 from "../Para15";
import Button from "../Button";
import { LuMapPin } from "react-icons/lu";

const Des_visiting = () => {
  return (
    <>
      <section className="py-7.5 lg:pt-5 lg:pb-[60px] px-3 lg:px-0">
        <Container>
          <h3 className="text-textClr1 pb-3 lg:pb-0 text-xl lg:text-3xl font-semibold">
            {" "}
            What to know before visiting London
          </h3>
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-[60%] mb-3 lg:mb-0">
              <Para15>
                London is a shining example of a metropolis at the highest peak
                of modernity and boasts an economy and cultural diversity that’s
                the envy of other global superpowers.{" "}
                <div className="h-3 lg:h-7.5"></div> Take the opportunity to
                acquaint yourself with its fascinating history chronicled by
                institutions like the British Museum as well as see how far it
                has come by simply riding the Tube and passing by celebrated
                landmarks like Buckingham Palace, Westminster Abbey, and marvels
                like Big Ben, the London Eye, and the Tower Bridge.{" "}
                <div className="h-3 lg:h-7.5"></div> Take the opportunity to You
                can also immerse yourself in its ever-evolving and impactful
                culture by visiting places like the National Gallery, the Tate
                Modern, West End, Abbey Road, the Royal Albert Hall, Oxford
                Street and the Westfield Shopping Centers, and areas referenced
                and seen in literature and film.
                <div className="h-3 lg:h-7.5"></div>
                <span className="border-b border-textClr3 text-textClr3! font-medium">
                  Show more
                </span>
              </Para15>
            </div>
            <div className="relative lg:w-[35%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05062044!2d-74.3091695806123!3d40.69719334793303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1764614694244!5m2!1sen!2sbd"
                className="w-full h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <Button
                className={
                  "group bg-white hover:bg-textClr3 transition-all duration-200 absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
                }
              >
                <Flex className={"gap-2"}>
                  <LuMapPin className=" group-hover:text-white transition-all duration-200" />
                  <Para15
                    text={"See popular activities on the map"}
                    className={
                      "text-textClr1 font-medium group-hover:text-white transition-all duration-200"
                    }
                  />
                </Flex>
              </Button>
            </div>
          </div>
          <div className="py-10.5">
            <h4 className="text-lg lg:text-[22px] text-textClr1 font-medium">
              Local weather
            </h4>
            <div className="grid grid-cols-4 gap-3">
              <div className="">
                <Para15
                  className={"font-medium text-textClr1"}
                  text={"DEC - FEB"}
                />
                <Flex>
                  <p className="text-lg lg:text-[22px] text-textClr1 font-medium">
                    7°
                  </p>
                  <p className="text-lg lg:text-[22px] text-textClr2 font-medium">
                    3°
                  </p>
                </Flex>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Des_visiting;
