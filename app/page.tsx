import { getAllPosts, Posts } from "@/utils/queries";
import Header from "@/app/components/Header";

export default async function Home() {
  const posts: Posts[] = await getAllPosts();

  return (
    <>
      <Header />
    </>
  );
}
