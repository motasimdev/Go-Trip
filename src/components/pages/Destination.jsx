import React from "react";
import Breadcrumb from "../Breadcrumb";
import Des_banner from "../layout/Des_banner";
import Des_activity from "../layout/Des_activity";

const Destination = () => {
  return (
    <div>
      <Breadcrumb
        pageOne={"Europe"}
        pageTwo={"United Kingdom (UK)"}
        pageThree={"London"}
      />
      <Des_banner/>
      <Des_activity/>
    </div>
  );
};

export default Destination;
