import { FC } from "react";
import { Posts } from "@/utils/types";
import Link from "next/link";
import PillWrapper from "@/app/globalComponents/PillWrapper";
import Time from "@/app/globalComponents/Time";

type PostProps = {
  post: Posts;
};

const Post: FC<PostProps> = ({ post }) => {
  const { id, title, excerpt, date, slug } = post;
  return (
    <Link href={`posts/${slug}`}>
      <div
        key={id}
        className="flex flex-col gap-small bg-primaryLighter p-small rounded-xl"
      >
        <h3 className="font-bold text-xl text-secondaryAccent">{title}</h3>
        <Time date={date} />
        <p>{excerpt}</p>
        <PillWrapper lightBg={true} map={post} />
      </div>
    </Link>
  );
};

export default Post;
