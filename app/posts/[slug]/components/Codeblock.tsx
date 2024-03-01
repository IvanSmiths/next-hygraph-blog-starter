"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FC } from "react";
import { LinkEmbedProps } from "@graphcms/rich-text-types";

const Codeblock: FC<LinkEmbedProps> = ({ children }) => {
  return (
    <div className="bg-primaryLighter rounded-xl border-[1px] border-primaryLight flex items-center">
      <SyntaxHighlighter
        showLineNumbers={true}
        language="typescript"
        style={coldarkDark}
        customStyle={{
          background: "transparent",
          fontSize: "15px",
          paddingTop: "1rem",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
