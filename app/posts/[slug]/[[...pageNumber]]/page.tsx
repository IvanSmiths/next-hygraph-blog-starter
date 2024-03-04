import { getAllPostsTest } from "@/utils/queries";
import Link from "next/link";
import Post from "@/app/components/Post";

export default async function Posts({ params }) {
  const { pageNumber = 1 } = params;
  const test = await getAllPostsTest(pageNumber);
  const edges = test.postsConnection.edges;
  const pageInfo = test.postsConnection.pageInfo;
  const posts = edges.map((edge: { node: any }) => edge.node);
  const pageSize = pageInfo.pageSize;
  const hasNextPage = pageInfo.hasNextPage;
  const hasPreviousPage = pageInfo.hasPreviousPage;
  const { count } = test.postsConnection.aggregate;
  const pageTotal = Math.ceil(count / pageSize);
  const pageArray = Array.from(Array(pageTotal).keys()).map((i) => i + 1);
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
      <ul className="flex items-center justify-center py-4 font-bold list-style-none">
        {hasPreviousPage && (
          <li>
            <Link
              className="relative block rounded bg-transparent px-3 py-1.5 text-md text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href={`/posts/${Number(pageNumber) - 1}`}
            >
              Previous
            </Link>
          </li>
        )}
        {pageArray.map((page) => {
          return (
            <li key={page}>
              <Link
                className={`relative block rounded bg-transparent px-3 py-1.5 text-md transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-800 
          ${
            Number(pageNumber) === page
              ? "text-white bg-neutral-600"
              : "text-neutral-600 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          }`}
                href={`/posts/${page}`}
              >
                {page}
              </Link>
            </li>
          );
        })}
        {hasNextPage && (
          <li>
            <Link
              className="relative block rounded bg-transparent px-3 py-1.5 text-md text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href={`/posts/${Number(pageNumber) + 1}`}
            >
              Next
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
