import { PostPage, Posts, Response, ResponsePage } from "@/utils/types";

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
                posts(
                orderBy: publishedAt_DESC, 
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

async function getAllPostsTest(pageNumber: number): Promise<any> {
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
             query PostsPagination {
              postsConnection(skip:${(pageNumber - 1) * 2}, first: 1) {
                aggregate {
                  count
                }
                edges {
                  node {
                    title
                    slug
                    keywords
                    id
                    date
                  }
                }
                pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  pageSize
                  startCursor
                }
              }
            }
            `,
      }),
    },
  );
  const json = await response.json();
  return json.data;
}

async function getPost(slug: string): Promise<PostPage[]> {
  if (!process.env.HYGRAPH_ENDPOINT) {
    throw new Error("Environment variable HYGRAPH_ENDPOINT is not set.");
  }
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `
              query Posts($slug: String!) {
              post(where: { slug: $slug }) {
              id
              publishedAt
              slug
              title
              date
              excerpt
              keywords
              content {
                raw
                html
                markdown
                text
              }
              coverImage {
                url
                width
                height
              }
              author {
                ... on Author {
                  remoteTypeName: __typename
                  remoteId: id
                  name
                  title
                  picture {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        `,
      variables: {
        slug: slug,
      },
    }),
  });
  const { data }: ResponsePage = await response.json();

  return data.post;
}

export { getAllPosts, getPost, getAllPostsTest };
