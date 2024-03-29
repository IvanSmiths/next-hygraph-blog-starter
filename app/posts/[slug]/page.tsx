import { getPost } from "@/utils/queries";
import { notFound } from "next/navigation";
import { PostPage, PostProps } from "@/utils/types";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Blockquote from "@/app/posts/[slug]/components/Blockquote";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import Hero from "@/app/posts/[slug]/components/Hero";

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
    description: post.excerpt || post.seo?.description,
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
      <Hero post={post} />
      <div className="pt-section flex flex-col items-center flex-wrap h-full w-full">
        <div className="lg:w-7/12 w-11/12 flex flex-col gap-regular">
          <RichText
            content={post.content.raw}
            renderers={{
              h2: ({ children }) => (
                <h2 className={`text-3xl xl:text-4xl text-secondaryAccent`}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className={`text-2xl xl:text-3xl text-secondaryAccent`}>{children}</h3>
              ),
              li: ({ children }) => (
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary xl:text-lg rounded-3xl"></div>
                  {children}
                </li>
              ),
              p: ({ children }) => <h2 className={`text-md xl:text-lg`}>{children}</h2>,
              a: ({ children, href, openInNewTab }) => (
                <a
                  href={href}
                  target={openInNewTab ? "_blank" : "_self"}
                  className={`text-md xl:text-lg text-brand font-bold cursor-pointer`}
                  rel="noreferrer"
                >
                  {children}
                </a>
              ),
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
