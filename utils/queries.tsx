export type Posts = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  keywords: Keywords;
};

type Keywords = {
  stack: string[];
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
      cache: "no-cache",
      body: JSON.stringify({
        query: `
              query getAllPosts {
                posts(
                orderBy: createdAt_DESC, 
                stage:PUBLISHED
                ) 
                {
                  id
                  slug
                  title
                  excerpt
                  date
                  keywords
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
