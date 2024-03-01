import React, { FC } from "react";
import { LinkEmbedProps } from "@graphcms/rich-text-types";

const Blockquote: FC<LinkEmbedProps> = ({ children }) => {
  return (
    <div className="bg-primaryLighter p-small rounded-xl relative border-[1px] border-brand">
      <picture className="absolute -right-5 -top-5 p-2 rounded-[100%] bg-primary">
        <img src="/icons/warning.svg" alt="warning" height="35" width="35" />
      </picture>
      <blockquote className={`text-md pr-1`}>{children}</blockquote>
    </div>
  );
};

export default Blockquote;
