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
        <div className="flex flex-col gap-regular justify-center items-center w-4/6">
          <h1 className="text-6xl text-center text-secondaryAccent">
            {post.title}
          </h1>
          <h2 className="text-center">{post.excerpt}</h2>
          <div className="w-full flex justify-center">
            <PillWrapper map={post} lightBg={false} />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-sm font-medium leading-5">Published on:</span>
            <Time date={post.date} />
          </div>
        </div>
      </div>
      <RichText
        content={post.content.raw}
        renderers={{
          h2: ({ children }) => (
            <h2 className={`text-3xl text-secondaryAccent`}>{children}</h2>
          ),
          p: ({ children }) => <h2 className={`text-md`}>{children}</h2>,
          blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
          code_block: ({ children }) => <Codeblock>{children}</Codeblock>,
        }}
      />
      {post.chart ? <Charts post={post} /> : null}
    </article>
  );
}
