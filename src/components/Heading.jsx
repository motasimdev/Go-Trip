import React from "react";

const Heading = ({ className, children, title, subTitle }) => {
  return (
    <>
      <div className="">
        <h3 className={`pb-1.5 lg:pb-3.5 font-medium md:font-semibold text-2xl lg:text-3xl text-textClr1`}>
          {title}
        </h3>
        <h4 className={`text-[12px] lg:text-base text-textClr2`}>{subTitle}</h4>
        {children}
      </div>
    </>
  );
};

export default Heading;
