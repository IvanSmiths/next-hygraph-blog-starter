import { FC } from "react";
import { PillProps } from "@/utils/types";

const Pill: FC<PillProps> = ({ label, lightBg }) => {
  return (
    <span
      className={`${lightBg ? "bg-primary" : "bg-primaryLighter"} p-3 rounded-xl w-fit`}
    >
      {label}
    </span>
  );
};

export default Pill;
