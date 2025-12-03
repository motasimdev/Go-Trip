import React from "react";
import Breadcrumb from "../Breadcrumb";
import Con_banner from "../layout/contact/Con_banner";

const Contact = () => {
  return (
    <>
      <Breadcrumb
        pageOne={"Europe"}
        pageTwo={"United Kingdom (UK)"}
        pageThree={"London"}
      />
      <Con_banner/>
    </>
  );
};

export default Contact;
