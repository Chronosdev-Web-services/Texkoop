import Image from "next/image";
import React from "react";
import Category from "../../components/blog/Category";
import PartnerWithUs from "../../components/blog/PartnerWithUs";
import RecentPost from "../../components/blog/RecentPost";
import SingleBlog from "../../components/blog/SingleBlog";
import Layout from "../../components/Layout";
import { blog } from "../../utils/data";

const BlogPage = () => {
  const [recentArticles, setRecentArticles] = React.useState(undefined)
  const [categories, setCategories] = React.useState(undefined)
  const [allBlogs, setAllBlogs] = React.useState(undefined)
  const getData1 = async()=>{
    const res =await fetch("/api/blog/recent-article-category")
    const response = await res.json()
    // console.log(response, response.data)
    if (res.status === 200) {
      setRecentArticles(response.data.latest_articles)
      setCategories(response.data.categories)
    }
    
  }

  const getArticles = async()=>{
    const resArticles =await fetch("/api/blog/articles")
    const responseArticles = await resArticles.json()
    console.log('TTT',responseArticles, responseArticles.data)
    if (resArticles.status === 200) {
      console.log(responseArticles)
      setAllBlogs(responseArticles.data.results)
    }
    
  }

  
  React.useEffect(()=>{
    getData1()
    getArticles()
  }, [])
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
          <RecentPost data={recentArticles}/>
          <Category data={categories} />
        </div>
        {allBlogs?.map((item) => (
          <SingleBlog data={item} key={item.id} />
        ))}
      </section>
      <PartnerWithUs />
    </Layout>
  );
};

export default BlogPage;
