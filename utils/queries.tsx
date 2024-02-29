export type Posts = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

type QueryResult = {
  posts: Posts[];
};

type Response = {
  data: QueryResult;
};
async function getAllPosts(): Promise<Posts[]> {
  if (!process.env.HYGRAPH_ENDPOINT) {
    throw new Error("Environment variable HYGRAPH_ENDPOINT is not set.");
  }
  const response: globalThis.Response = await fetch(
    process.env.HYGRAPH_ENDPOINT,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `
                      query getAllPosts {
                        posts(orderBy: publishedAt_DESC) {
                          id
                          slug
                          title
                          excerpt
                          date
                        }
                      }
                    `,
      }),
    },
  );
  const { data }: Response = await response.json();
  return data.posts;
}

export { getAllPosts };
