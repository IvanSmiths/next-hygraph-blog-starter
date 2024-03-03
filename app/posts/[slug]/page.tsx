import { getPost } from "@/utils/queries";
import { notFound } from "next/navigation";
import { PostPage, PostProps } from "@/utils/types";
import PillWrapper from "@/app/globalComponents/PillWrapper";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Blockquote from "@/app/posts/[slug]/components/Blockquote";
import dynamic from "next/dynamic";
import Pill from "@/app/globalComponents/Pill";
import { Metadata } from "next";
import AuthorAndTime from "@/app/posts/[slug]/components/AuthorAndTime";
import CoverImage from "@/app/posts/[slug]/components/CoverImage";

const Codeblock = dynamic(
  () => import("@/app/posts/[slug]/components/Codeblock"),
  { ssr: false },
);

const Charts = dynamic(() => import("@/app/posts/[slug]/components/Chart"), {
  ssr: false,
});

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  // @ts-ignore
  const post: PostPage = await getPost(params.slug);
  if (!post) return notFound();
  return {
    title: post.title,
    description: post.description || post.seo?.description,
    openGraph: {
      images: [
        {
          url: post.coverImage?.url,
          width: post.coverImage?.width,
          height: post.coverImage?.height,
        },
      ],
    },
  };
}

export default async function Page({ params }: PostProps) {
  const post: any = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="flex flex-col gap-small sm:mt-28 mt-medium">
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-regular justify-center items-center w-11/12">
          <Pill label={post.category} lightBg={false} />
          <h1 className="md:text-6xl text-3xl text-center text-secondaryAccent md:w-9/12 :w-full">
            {post.title}
          </h1>
          <h2 className="text-center md:w-6/12 :w-full">{post.excerpt}</h2>
          <div className="w-full flex justify-center">
            <PillWrapper map={post} lightBg={false} />
          </div>
          <AuthorAndTime post={post} />
          <CoverImage post={post} />
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
