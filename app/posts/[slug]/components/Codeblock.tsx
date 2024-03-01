"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FC, useEffect, useState } from "react";
import { LinkEmbedProps } from "@graphcms/rich-text-types";

const Codeblock: FC<LinkEmbedProps> = ({ children }) => {
  const [isCopied, setIsCopied] = useState<Boolean>(false);
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  useEffect(() => {
    const removeListener = () =>
      document.removeEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickOutside);
    return removeListener;
  }, [isCopied]);

  //@ts-ignore
  const handleClickOutside = (event) => {
    if (!event.target.closest(".codeblock")) {
      setIsCopied(false);
    }
  };

  return (
    <div className="bg-primaryLighter rounded-xl border-[1px] border-primaryLight flex items-center relative">
      <img
        src="/icons/copy.svg"
        height="42px"
        width="42px"
        alt="copy to clipboard"
        onClick={copyCode}
        className="absolute -right-5 -top-5 cursor-pointer"
      />
      {isCopied && (
        <span className="p-3 rounded absolute m-auto left-0 right-0 bg-primary w-fit">
          Copied!
        </span>
      )}
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
