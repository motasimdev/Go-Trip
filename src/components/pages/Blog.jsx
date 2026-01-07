import React from "react";
import Breadcrumb from "../Breadcrumb";
import Blog_banner from "../layout/blog/Blog_banner";
import Blog_reviewOne from "../layout/blog/Blog_reviewOne";
import Blog_share from "../layout/blog/Blog_share";
import Blog_testimonial from "../layout/blog/Blog_testimonial";
import Blog_review from "../layout/blog/Blog_review";
import Blog_reply from "../layout/blog/Blog_reply";

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
      <Blog_share/>
      <Blog_testimonial/>
      <Blog_review/>
      <Blog_reply/>
    </>
  );
};

export default Blog;
