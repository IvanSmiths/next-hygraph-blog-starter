import { FC } from "react";
import Time from "@/app/globalComponents/Time";

type AuthorAndTime = {
  author: {
    name: string;
    picture: {
      url: string;
      height: string;
      width: string;
    };
  };
  date: string;
};

type AuthorAndTimeProps = {
  post: AuthorAndTime;
};
const AuthorAndTime: FC<AuthorAndTimeProps> = ({ post }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img
        className="w-12 h-12 rounded-[100%]"
        src={post.author.picture.url}
        height={post.author.picture.height}
        width={post.author.picture.width}
        loading="lazy"
        alt={post.author.name}
      />
      <span>{post.author.name}</span>
      <span>-</span>
      <Time date={post.date} />
    </div>
  );
};

export default AuthorAndTime;
