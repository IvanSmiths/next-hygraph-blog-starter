import { getAllPosts, Posts } from "@/utils/queries";
import Header from "@/app/components/Header";
import React from "react";
import Post from "@/app/components/Post";

export default async function Home() {
  const posts: Posts[] = await getAllPosts();

  return (
    <>
      <Header />
      <section className="flex flex-col gap-small pt-medium">
        <h2 className="text-xl">My Articles:</h2>
        {posts.map((post: Posts) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}
