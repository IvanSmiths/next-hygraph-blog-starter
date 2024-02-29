import React from "react";
import { Posts } from "@/utils/queries";
import Pill from "@/app/globalComponents/Pill";
import Link from "next/link";

type PostProps = {
  post: Posts;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const { id, title, excerpt, date, keywords, slug } = post;
  return (
    <Link href={`posts/${slug}`}>
      <div
        key={id}
        className="flex flex-col gap-2 bg-primaryLight p-small rounded-xl"
      >
        <h3 className="font-bold text-xl text-secondaryAccent">{title}</h3>
        <span>{date}</span>
        <p>{excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {keywords?.stack.map(
            (keyword: string, index: React.Key | null | undefined) => (
              <Pill key={index} label={keyword} />
            ),
          )}
        </div>
      </div>
    </Link>
  );
};

export default Post;
