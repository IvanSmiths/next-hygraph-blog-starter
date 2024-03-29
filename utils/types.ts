import { RichTextContent } from "@graphcms/rich-text-types";
import { Chart } from "@/utils/chartTypes";

type AuthorPicture = CoverImage;

type Author = {
  id: string;
  name: string;
  picture: AuthorPicture;
  remoteTypeName: string;
  title: string;
};

type CoverImage = {
  altText: string;
  height: string;
  url: string;
  width: string;
};

type PostProps = {
  params: { slug: string };
};

type Posts = {
  date: string;
  excerpt: string;
  category?: string;
  id: string;
  keywords: Keywords;
  slug: string;
  stack: string[];
  title: string;
};

type PostPage = {
  author: Author;
  category: string;
  chart: Chart;
  content: RichTextContent;
  coverImage: CoverImage;
  date: string;
  description?: string;
  excerpt: string;
  id: string;
  keywords: Keywords;
  publishedAt: string;
  seo?: { description: string };
  slug: string;
  title: string;
};

type Keywords = {
  stack: string[];
  keywords: Stack;
};

type QueryResult = {
  posts: Posts[];
};

type QueryResultPage = {
  post: PostPage[];
};

type Response = {
  data: QueryResult;
};

type ResponsePage = {
  data: QueryResultPage;
};

type Stack = {
  stack: string[];
};

export type { Keywords, PostPage, PostProps, Posts, Response, ResponsePage };
