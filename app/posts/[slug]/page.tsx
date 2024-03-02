import { getPost } from "@/utils/queries";
import { notFound } from "next/navigation";
import { PostProps } from "@/utils/types";
import PillWrapper from "@/app/globalComponents/PillWrapper";
import Time from "@/app/globalComponents/Time";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Blockquote from "@/app/posts/[slug]/components/Blockquote";
import Codeblock from "@/app/posts/[slug]/components/Codeblock";
import Charts from "@/app/posts/[slug]/components/Chart";

export default async function Page({ params }: PostProps) {
  const post: any = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="flex flex-col gap-small">
      <h1 className="text-3xl text-secondaryAccent">{post.title}</h1>
      <h2>{post.excerpt}</h2>
      <PillWrapper map={post} lightBg={false} />
      <div className="flex items-center gap-2">
        <dt className="text-sm font-medium leading-5">Published on:</dt>
        <Time date={post.date} />
      </div>
      <RichText
        content={post.content.raw}
        renderers={{
          h2: ({ children }) => <h2 className={`text-3xl`}>{children}</h2>,
          p: ({ children }) => <h2 className={`text-md`}>{children}</h2>,
          blockquote: ({ children }) => <Blockquote children={children} />,
          code_block: ({ children }) => <Codeblock children={children} />,
        }}
      />
      {post.chart ? <Charts post={post} /> : null}
    </article>
  );
}
