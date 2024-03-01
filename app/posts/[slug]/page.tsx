import { getPost } from "@/utils/queries";
import { notFound } from "next/navigation";
import { PostProps } from "@/utils/types";
import PillWrapper from "@/app/globalComponents/PillWrapper";
import Time from "@/app/globalComponents/Time";
import { RichText } from "@graphcms/rich-text-react-renderer";

export default async function Page({ params }: PostProps) {
  const post: any = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  console.log(post);

  return (
    <article className="flex flex-col gap-small">
      <h1 className="text-3xl text-secondaryAccent">{post.title}</h1>
      <h2>{post.excerpt}</h2>
      <div className="flex items-center gap-2">
        <dt className="text-sm font-medium leading-5">Published on:</dt>
        <Time date={post.date} />
      </div>
      <PillWrapper map={post} lightBg={false} />
      <RichText content={post.content.raw} />
    </article>
  );
}
