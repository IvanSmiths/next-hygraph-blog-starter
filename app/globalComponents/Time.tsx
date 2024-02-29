import { FC } from "react";
import { Time } from "@/utils/types";

const Time: FC<Time> = ({ date }) => {
  return (
    <time dateTime={date}>
      {new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </time>
  );
};

export default Time;
