import React from "react";
import Breadcrumb from "../Breadcrumb";
import Des_banner from "../layout/Des_banner";

const Destination = () => {
  return (
    <div>
      <Breadcrumb
        pageOne={"Europe"}
        pageTwo={"United Kingdom (UK)"}
        pageThree={"London"}
      />
      <Des_banner/>
    </div>
  );
};

export default Destination;
