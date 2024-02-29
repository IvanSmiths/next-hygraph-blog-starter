import { getAllPosts, Posts } from '@/utils/queries'

export default async function Home() {
  const posts:Posts[] = await getAllPosts()

  console.log(posts)
  return (
    <div>

    </div>
  );
}
