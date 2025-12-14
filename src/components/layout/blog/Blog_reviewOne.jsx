import Para15 from "@/components/Para15";
import React from "react";

const Blog_reviewOne = () => {
  return (
    <>
      <section className="py-2 lg:pt-6 px-3 lg:px-0">
        <div className="max-w-[850px] m-auto">
          <div className="">
            <h4 className="text-xl text-textClr1 font-medium">
              What makes a good brand book?
            </h4>
            {/* ======================= */}
            <Para15
              text={
                "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Semper risus in hendrerit gravida rutrum quisque non. At urna condimentum mattis pellentesque id nibh tortor. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mauris commodo quis imperdiet massa. Vitae congue eu consequat ac felis."
              }
              className={"text-textClr1"}
            />
            {/* ======================= */}
            <div className="pl-4">
              <ul className="list-disc">
                <li className="">
                  <Para15
                    text={
                      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida."
                    }
                    className={"text-textClr1"}
                  />
                </li>
                <li className="">
                  <Para15
                    text={
                      "At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur"
                    }
                    className={"text-textClr1"}
                  />
                </li>
                <li className="">
                  <Para15
                    text={"Magna etiam tempor orci eu lobortis elementum."}
                    className={"text-textClr1"}
                  />
                </li>
                <li className="">
                  <Para15
                    text={
                      "Bibendum est ultricies integer quis. Semper eget duis at tellus."
                    }
                    className={"text-textClr1"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog_reviewOne;
