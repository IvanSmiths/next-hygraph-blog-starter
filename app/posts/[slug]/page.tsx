import { getPost } from "@/utils/queries";
import { notFound } from "next/navigation";
import { PostProps } from "@/utils/types";
import PillWrapper from "@/app/globalComponents/PillWrapper";
import Time from "@/app/globalComponents/Time";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Blockquote from "@/app/posts/[slug]/components/Blockquote";
import dynamic from "next/dynamic";
import Pill from "@/app/globalComponents/Pill";

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

  console.log(post);

  return (
    <article className="flex flex-col gap-small sm:mt-section mt-medium">
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-regular justify-center items-center w-11/12">
          <Pill label={post.category} lightBg={false} />
          <h1 className="md:text-6xl text-3xl text-center text-secondaryAccent md:px-10 lg:px-32 px-0">
            {post.title}
          </h1>
          <h2 className="text-center md:px-10 lg:px-56 xl:px-64 px-0">
            {post.excerpt}
          </h2>
          <div className="w-full flex justify-center">
            <PillWrapper map={post} lightBg={false} />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-sm font-medium leading-5">Published on:</span>
            <Time date={post.date} />
          </div>
          <img
            className="w-full"
            src={post.coverImage.url}
            height={post.coverImage.height}
            width={post.coverImage.width}
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div className="pt-section flex flex-col items-center flex-wrap h-full w-full">
        <div className="lg:w-7/12 w-11/12 flex flex-col gap-regular">
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
        </div>
      </div>
    </article>
  );
}
