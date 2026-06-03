import { Post } from "@/types/post";
import CoverImage from "./CoverImage";
import Link from "next/link";
import Author from "./Author";
import {
  IoArrowForward,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoTimeOutline,
} from "react-icons/io5";

type PostsResponse = {
  data: {
    posts: Post[];
  };
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

async function BlogsList() {
  await new Promise<void>((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  }: PostsResponse = await res.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-5 sm:gap-6 xl:gap-8">
      {posts.map((post) => {
        return (
          <article
            key={post._id}
            className="group col-span-12 flex h-full flex-col overflow-hidden rounded-lg border border-secondary-100 bg-secondary-0 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/60 focus-within:-translate-y-1 focus-within:border-primary-300 focus-within:shadow-xl sm:col-span-6 lg:col-span-4"
          >
            <div className="relative overflow-hidden bg-secondary-100 [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105 group-focus-within:[&_img]:scale-105">
              <CoverImage {...post} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-secondary-900/45 to-transparent" />
              <div className="absolute left-3 top-3 rounded-full border border-secondary-0/70 bg-secondary-0/90 px-3 py-1 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur">
                {post.category.title}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <div className="mb-3 flex flex-wrap justify-between items-center gap-3 text-xs text-secondary-500">
                <span className="inline-flex items-center gap-1">
                  <IoTimeOutline className="h-4 w-4 text-primary-900" />
                  {post.readingTime} min read
                </span>
                <span>{dateFormatter.format(new Date(post.createdAt))}</span>
              </div>

              <Link href={`/blogs/${post.slug}`}>
                <h2 className="mb-2 text-lg font-bold leading-snug text-secondary-900 transition-colors duration-200 group-hover:text-primary-900">
                  {post.title}
                </h2>
              </Link>

              <p className="mb-5 line-clamp-3 text-sm leading-6 text-secondary-600">
                {post.briefText}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-secondary-100 pt-4">
                <Author {...post.author} />

                <div className="flex items-center gap-3 text-xs text-secondary-500">
                  <span className="inline-flex items-center gap-1">
                    <IoChatbubbleOutline className="h-4 w-4" />
                    {post.commentsCount}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <IoHeartOutline className="h-4 w-4" />
                    {post.likesCount}
                  </span>
                </div>
              </div>

              <Link
                href={`/blogs/${post.slug}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary-100 px-4 py-2.5 text-sm font-semibold text-secondary-800 transition-all duration-200 hover:bg-primary-900 hover:text-secondary-0 focus:bg-primary-900 focus:text-secondary-0"
              >
                Read more
                <IoArrowForward className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  ) : (
    <p>No blogs are published yet!</p>
  );
}
export default BlogsList;
