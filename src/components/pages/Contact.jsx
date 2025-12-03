import React from "react";
import Breadcrumb from "../Breadcrumb";
import Con_banner from "../layout/contact/Con_banner";
import Con_info from "../layout/contact/Con_info";

const Contact = () => {
  return (
    <>
      <Breadcrumb
        pageOne={"Europe"}
        pageTwo={"United Kingdom (UK)"}
        pageThree={"London"}
      />
      <Con_banner/>
      <Con_info/>
    </>
  );
};

export default Contact;
