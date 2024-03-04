import { FC } from "react";
import { PillProps } from "@/utils/types";

const Pill: FC<PillProps> = ({ label, darkBg, hasIcon }) => {
  return (
    <span
      className={`${darkBg ? "bg-primary" : "bg-primaryLighter"} ${hasIcon ? "flex justify-center items-center gap-3" : null} p-3 rounded-xl w-fit`}
    >
      {label}
      {hasIcon ? (
        <img src="/icons/open-in-new-tab.svg" alt="open github link" />
      ) : null}
    </span>
  );
};

export default Pill;
