import React, { FC } from "react";

type CoverImage = {
  coverImage: {
    url: string;
    height: string;
    width: string;
    altText: string;
  };
};

type CoverImageProps = {
  post: CoverImage;
};

const CoverImage: FC<CoverImageProps> = ({ post }) => {
  return (
    <img
      className="w-full"
      src={post.coverImage.url}
      height={post.coverImage.height}
      width={post.coverImage.width}
      alt={post.coverImage.altText}
    />
  );
};

export default CoverImage;
