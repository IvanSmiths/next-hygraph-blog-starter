import { RichTextContent } from "@graphcms/rich-text-types";

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

export type PostPage = {
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: RichTextContent;
  coverImage: CoverImage;
  author: Author;
};

type CoverImage = {
  url: string;
  width: string;
  height: string;
};

type Author = {
  remoteTypeName: string;
  id: string;
  name: string;
  title: string;
  picture: AuthorPicture;
};

type AuthorPicture = CoverImage;

type QueryResultPage = {
  post: PostPage[];
};

type ResponsePage = {
  data: QueryResultPage;
};

export async function getPost(slug: string): Promise<PostPage[]> {
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

export { getAllPosts };
