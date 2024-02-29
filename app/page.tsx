import { getAllPosts, Posts } from "@/utils/queries";
import Header from "@/app/components/Header";
import React from "react";
import Post from "@/app/components/Post";

export default async function Home() {
  const posts: Posts[] = await getAllPosts();

  return (
    <>
      <Header />
      {posts.map((post: Posts) => (
        <Post post={post} />
      ))}
    </>
  );
}
