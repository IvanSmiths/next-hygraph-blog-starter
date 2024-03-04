import { getAllPosts } from "@/utils/queries";
import Header from "@/app/components/Header";
import Post from "@/app/components/Post";
import { Posts } from "@/utils/types";
import Blob from "@/app/globalComponents/Blob";
import Pill from "@/app/globalComponents/Pill";
import React from "react";

export default async function Home() {
  const posts: Posts[] = await getAllPosts();

  return (
    <>
      {/* delete the boilerplate from here*/}
      <section className="w-full flex flex-col items-center mt-section">
        <div className="w-10/12 flex flex-col gap-small">
          <Blob />
          <h1 className="lg:text-8xl xl:w-11/12 2xl:w-9/12 w-fit md:text-7xl font-bold text-5xl text-secondaryAccent">
            <strong className="bg-gradient-to-r from-secondaryAccent to-brand font-semibold text-transparent h-full pb-3 bg-clip-text">
              HyBlog
            </strong>
            <br /> A Starter blog built with{" "}
            <strong className="text-brand">
              <a href="https://nextjs.org/" target="_blank" rel="noopener">
                Next.js{" "}
              </a>
            </strong>
            and{" "}
            <strong className="text-brand">
              <a href="https://hygraph.com/" target="_blank" rel="noopener">
                Hygraph
              </a>
            </strong>
          </h1>
          <a
            className="w-fit"
            href="https://github.com/IvanSmiths/next-hygraph-blog-starter"
            target="_blank"
            rel="noopener"
          >
            <Pill hasIcon={true} label="GitHub" darkBg={false} />
          </a>
        </div>
      </section>
      {/* to here*/}
      <div className="w-full flex flex-col items-center">
        <div className="w-5/6 relative lg:w-3/6 pt-section">
          <Header />
          <main className="flex flex-col gap-small pt-section">
            <h2 className="text-xl">My Articles:</h2>
            {posts.map((post: Posts) => (
              <Post key={post.id} post={post} />
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
