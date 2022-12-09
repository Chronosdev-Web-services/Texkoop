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
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const BlogPost = () => {
  const router = useRouter();
  const { post } = router.query;
  const { data } = blog;
  return (
    <Layout title={` ${post} `}>
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
        <div className="col-start-1 justify-round flex flex-col">
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
                <div className="flex text-xs gap-2 items-center mt-2">
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
        <div className="col-span-2 md:w-[80%] flex flex-col justify-between">
          <div className="text-base flex flex-col gap-5">
            <p className="font-bold mb-5">Lorem Ipsum Dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut eni
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eius tempor incididunt ut
              labore et dolore magna aliqua. Ut eni Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut eni
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eius tempor incididunt ut
              labore et dolore magna aliqua. Ut eni Lorem ipsum dolor sit amet.
            </p>
            <Image
              src="/images/blog/single_blog.svg"
              alt="how we stand out"
              className="w-full h-full object-cover bottom-0 "
              width="50"
              height="50"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut eni
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eius tempor incididunt ut
              labore et dolore magna aliqua. Ut eni Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut eni
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eius tempor incididunt ut
              labore et dolore magna aliqua. Ut eni Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex justify-between border-b border-black">
            <div>Tags:</div>
            <div>
              <p>Share:</p>
              <div className="flex gap-2">
                <AiFillFacebook size={40} color="#FAA019" />
                <AiFillTwitterSquare size={40} color="#FAA019" />
                <AiFillInstagram size={40} color="#FAA019" />
                <AiFillLinkedin size={40} color="#FAA019" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto container w-[90%] my-20">
        <p className="font-bold h4-text">Articles you May Like</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {data.slice(0, 3).map((item) => (
            <SingleBlog key={item.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
