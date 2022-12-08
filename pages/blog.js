import Image from "next/image";
import React from "react";
import BlogSection from "../components/blog/BlogSection";
import Layout from "../components/Layout";

const blog = () => {
  return (
    <Layout title="Blog">
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
      <BlogSection />
    </Layout>
  );
};

export default blog;
