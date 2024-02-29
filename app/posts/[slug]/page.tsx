import { getPost } from "@/utils/queries";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  title: string;
};
export default async function Page({ params }: Props) {
  const post: any = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return <article>{post.title}</article>;
}
