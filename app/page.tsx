import { getAllPosts } from "@/utils/queries";
import Header from "@/app/components/Header";
import Post from "@/app/components/Post";
import { Posts } from "@/utils/types";

export default async function Home() {
  const posts: Posts[] = await getAllPosts();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-5/6 relative lg:w-4/6 pt-section">
        <Header />
        <main className="flex flex-col gap-small pt-section">
          <h2 className="text-xl">My Articles:</h2>
          {posts.map((post: Posts) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
