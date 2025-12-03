import React from "react";
import Breadcrumb from "../Breadcrumb";
import Con_banner from "../layout/contact/Con_banner";
import Con_info from "../layout/contact/Con_info";
import Con_choose from "../layout/contact/Con_choose";

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
      <Con_choose/>
    </>
  );
};

export default Contact;
