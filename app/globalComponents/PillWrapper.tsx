import { FC, Key } from "react";
import Pill from "@/app/globalComponents/Pill";
import { PillWrapperProps } from "@/utils/types";

const PillWrapper: FC<PillWrapperProps> = ({ map, darkBg }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {map.keywords?.stack.map(
        (keyword: string, index: Key | null | undefined) => (
          <Pill key={index} darkBg={darkBg} label={keyword} />
        ),
      )}
    </div>
  );
};

export default PillWrapper;
