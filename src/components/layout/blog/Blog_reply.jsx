import Para15 from "@/components/Para15";
import React from "react";

const Blog_reply = () => {
  return (
    <>
      <section className="py-2 lg:pt-6 px-3 lg:px-0">
        <div className="max-w-[850px] m-auto">
          <h6 className="pb-4 text-lg font-medium md:text-[22px] text-textClr1">
            Leave a Reply
          </h6>
          <Para15 text={"Your email address will not be published."}/>
        </div>
      </section>
    </>
  );
};

export default Blog_reply;
