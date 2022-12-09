import Image from "next/image";
import React from "react";
import Category from "../../components/blog/Category";
import PartnerWithUs from "../../components/blog/PartnerWithUs";
import RecentPost from "../../components/blog/RecentPost";
import SingleBlog from "../../components/blog/SingleBlog";
import Layout from "../../components/Layout";
import { blog } from "../../utils/data";

const BlogPage = () => {
  const { data } = blog;
  return (
    <Layout title="Blog Homepage">
      <section className="w-full relative h-[70vh] mb-20">
        <Image
          src="/images/blog/blog_bg.svg"
          quality={100}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <section className="container w-[90%] mx-auto my-20 gap-10 grid md:grid-cols-3">
        <div className="col-start-1 row-span-2 h-full w-full justify-between flex flex-col">
          <RecentPost />
          <Category />
        </div>
        {data.map((item) => (
          <SingleBlog key={item.id} />
        ))}
      </section>
      <PartnerWithUs />
    </Layout>
  );
};

export default BlogPage;
