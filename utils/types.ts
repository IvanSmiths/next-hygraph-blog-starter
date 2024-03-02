import { RichTextContent } from "@graphcms/rich-text-types";

type Keywords = {
  stack: string[];
  keywords: Stack;
};

type Chart = {
  chart: string;
};

type Stack = {
  stack: string[];
};

type QueryResult = {
  posts: Posts[];
};

type Response = {
  data: QueryResult;
};

type AuthorPicture = CoverImage;

type QueryResultPage = {
  post: PostPage[];
};

type ResponsePage = {
  data: QueryResultPage;
};

type PillProps = {
  label: string;
  lightBg: boolean;
};

type PillWrapperProps = {
  map: Keywords;
  lightBg: boolean;
};

type PostProps = {
  params: { slug: string };
  title: string;
};

type Posts = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  stack: string[];
  keywords: Keywords;
};

type PostPage = {
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  keywords: Keywords;
  chart: Chart;
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

type Time = {
  date: string;
};

export type {
  Keywords,
  PillProps,
  PillWrapperProps,
  PostPage,
  PostProps,
  Posts,
  Response,
  ResponsePage,
  Time,
};
