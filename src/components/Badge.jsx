import React from "react";

const Badge = ({bagText, className, children }) => {
  return (
    <div className={`py-2 px-3 bg-[#3554D1] rounded-r-lg ${className}`}>
      <h4 className={` text-white text-[12px] font-medium  `}>
      {bagText}
      </h4>
        {children}
    </div>
  );
};

export default Badge;
