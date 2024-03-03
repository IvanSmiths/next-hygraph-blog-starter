import React, { FC } from "react";
import { CoverImageProps } from "@/utils/types";

const CoverImage: FC<CoverImageProps> = ({ post }) => {
  return (
    <img
      className="w-full"
      src={post.coverImage.url}
      height={post.coverImage.height}
      width={post.coverImage.width}
      loading="lazy"
      alt={post.coverImage.altText}
    />
  );
};

export default CoverImage;
