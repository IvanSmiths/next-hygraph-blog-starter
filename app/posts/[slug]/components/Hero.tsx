import React, { FC } from "react";
import Pill from "@/app/globalComponents/Pill";
import PillWrapper from "@/app/globalComponents/PillWrapper";
import Blob from "@/app/globalComponents/Blob";
import AuthorAndTime from "@/app/posts/[slug]/components/AuthorAndTime";
import CoverImage from "@/app/posts/[slug]/components/CoverImage";
import { Hero } from "@/utils/types";

const Hero: FC<Hero> = ({ post }) => {
  return (
    <div className="w-full flex justify-center">
      <Blob />
      <div className="flex flex-col gap-regular justify-center items-center w-11/12">
        {post.category ? <Pill label={post.category} lightBg={false} /> : null}
        <h1 className="md:text-7xl text-3xl text-center bg-gradient-to-r from-secondaryAccent via-secondaryAccent to-brand font-semibold text-transparent h-full pb-2 bg-clip-text md:w-9/12 :w-full">
          {post.title}
        </h1>
        <h2 className="text-center md:w-6/12 :w-full">{post.excerpt}</h2>
        <div className="w-full flex justify-center">
          <PillWrapper map={post} lightBg={false} />
        </div>
        <AuthorAndTime post={post} />
        <CoverImage post={post} />
      </div>
    </div>
  );
};

export default Hero;
