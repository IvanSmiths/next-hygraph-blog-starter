import { getPost } from "@/utils/queries";
import { notFound } from "next/navigation";
import { PostProps } from "@/utils/types";
import PillWrapper from "@/app/globalComponents/PillWrapper";
import Time from "@/app/globalComponents/Time";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Blockquote from "@/app/posts/[slug]/components/Blockquote";
import dynamic from "next/dynamic";

const Codeblock = dynamic(
  () => import("@/app/posts/[slug]/components/Codeblock"),
  { ssr: false },
);

const Charts = dynamic(() => import("@/app/posts/[slug]/components/Chart"), {
  ssr: false,
});

export default async function Page({ params }: PostProps) {
  const post: any = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="flex flex-col gap-small mt-section">
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-regular justify-center items-center w-10/12">
          <h1 className="md:text-6xl text-3xl text-center text-secondaryAccent md:px-10 lg:px-20 px-0">
            {post.title}
          </h1>
          <h2 className="text-center md:px-10 lg:px-40 xl:px-56 px-0">
            {post.excerpt}
          </h2>
          <div className="w-full flex justify-center">
            <PillWrapper map={post} lightBg={false} />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-sm font-medium leading-5">Published on:</span>
            <Time date={post.date} />
          </div>
          <img className="w-full" src="/docs/blog-starter.png" alt="" />
        </div>
      </div>
      <div className="pt-section flex flex-col items-center flex-wrap h-full w-full">
        <div className="flex w-10/12">
          <div className="lg:w-4/6 w-full flex flex-col gap-regular">
            <RichText
              content={post.content.raw}
              renderers={{
                h2: ({ children }) => (
                  <h2 className={`text-3xl text-secondaryAccent`}>
                    {children}
                  </h2>
                ),
                p: ({ children }) => <h2 className={`text-md`}>{children}</h2>,
                blockquote: ({ children }) => (
                  <Blockquote>{children}</Blockquote>
                ),
                code_block: ({ children }) => <Codeblock>{children}</Codeblock>,
              }}
            />
            {post.chart ? <Charts post={post} /> : null}
          </div>
          <ul className="w-2/6 sticky top-medium lg:flex flex-col items-end h-fit hidden lg:visible">
            <li>Section 1</li>
            <li>Section 2</li>
            <li>Section 3</li>
            <li>Section 4</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
