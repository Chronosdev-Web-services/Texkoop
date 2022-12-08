import React from "react";
import { blog } from "../../utils/data";
import Category from "./Category";
import PartnerWithUs from "./PartnerWithUs";
import RecentPost from "./RecentPost";
import SingleBlog from "./SingleBlog";

const BlogSection = () => {
  const { data } = blog;
  return (
    <>
      <section className="container w-[90%] mx-auto my-20 gap-10 grid md:grid-cols-3">
        <div className="col-start-1 row-span-2 h-full w-full">
          <RecentPost />
          <Category />
        </div>
        {data.map((item) => (
          <SingleBlog key={item.id} />
        ))}
      </section>
      <PartnerWithUs />
    </>
  );
};

export default BlogSection;
