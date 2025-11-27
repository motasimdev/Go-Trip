import React from "react";

const Heading = ({ className, children, title, subTitle }) => {
  return (
    <>
      <div className="">
        <h3 className={`font-semibold text-3xl text-textClr1 ${className}`}>
          {title}
        </h3>
        <h4 className={`text-base text-textClr2 ${className}`}>{subTitle}</h4>
        {children}
      </div>
    </>
  );
};

export default Heading;
