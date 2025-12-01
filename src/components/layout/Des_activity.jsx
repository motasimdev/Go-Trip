import React from "react";
import CampIcon from "../CampIcon";
import Container from "../Container";

const Des_activity = () => {
  return (
    <>
      <section className="py-3 lg:py-5">
        <Container>
          <div
            className={
              " grid md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-7 justify-center"
            }
          >
            <div className="group hover:bg-textClr3 transition-all duration-300 cursor-pointer px-[50px] pt-[75px] pb-6 border border-[#dddddd] text-center hover:-translate-y-3 rounded-sm">
              <div className={
                  "m-auto mb-15 group-hover:text-white transition-all duration-100"
                }>
                    
                </div>
             
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Des_activity;
