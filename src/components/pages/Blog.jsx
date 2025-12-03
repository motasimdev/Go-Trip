import React from "react";
import Breadcrumb from "../Breadcrumb";
import Blog_banner from "../layout/blog/Blog_banner";
import Blog_reviewOne from "../layout/blog/Blog_reviewOne";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageOne={"Europe"}
        pageTwo={"United Kingdom"}
        pageThree={"London"}
      />
      <Blog_banner/>
      <Blog_reviewOne/>
    </>
  );
};

export default Blog;
