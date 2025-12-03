import React from "react";
import Breadcrumb from "../Breadcrumb";
import Blog_banner from "../layout/blog/Blog_banner";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageOne={"Europe"}
        pageTwo={"United Kingdom"}
        pageThree={"London"}
      />
      <Blog_banner/>
    </>
  );
};

export default Blog;
