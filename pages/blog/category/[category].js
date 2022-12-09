import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Category from "../../../components/blog/Category";
import RecentPost from "../../../components/blog/RecentPost";
import SingleBlog from "../../../components/blog/SingleBlog";
import Layout from "../../../components/Layout";
import { blog } from "../../../utils/data";
import style from "../../../styles/z_index.module.css";
import { BiSupport, BiEnvelope } from "react-icons/bi";
import { MdWifiCalling3 } from "react-icons/md";

const BlogCategory = () => {
  const router = useRouter();
  const { category } = router.query;
  const { data } = blog;
  return (
    <Layout title={` ${category} Blog`}>
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
        <div className="col-start-1 flex flex-col">
          <RecentPost />
          <Category />
          <div className="w-full relative h-[300px] border border-black">
            <Image
              src="/images/blog/category.svg"
              quality={100}
              fill
              priority
              className={style.less_index}
              style={{
                objectFit: "cover",
              }}
            />
            <div className="text-white top-1/2 right-1/2">
              <div className="flex justify-center  items-center flex-col mt-20">
                <BiSupport size="50" color="#FAA019" />
                <p className="uppercase text-xl font-bold">How can we help?</p>
                <div className="flex text-xs gap-2 items-center">
                  <MdWifiCalling3 color="#FAA019" />
                  <p>+33 6 84 50 70 79</p>
                </div>
                <div className="flex text-xs gap-2 items-center mt-2">
                  <BiEnvelope color="#FAA019" />
                  <p> info@texkoop.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid md: gap-10 grid-cols-2">
          {data.slice(0, 6).map((item) => (
            <SingleBlog key={item.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogCategory;
