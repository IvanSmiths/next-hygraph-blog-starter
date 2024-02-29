import React from "react";
import { Posts } from "@/utils/queries";

type PostProps = {
  post: Posts;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const { id, title, excerpt } = post;
  return (
    <section key={id}>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </section>
  );
};

export default Post;
