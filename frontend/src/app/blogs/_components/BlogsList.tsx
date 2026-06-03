import { Post } from "@/types/post";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { TbClockBitcoin } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";

type PostsResponse = {
  data: {
    posts: Post[];
  };
};

async function PostsList() {
  await new Promise<void>((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  }: PostsResponse = await res.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 hover:border-primary-100 hover:shadow-primary-100 rounded-lg shadow-md p-2 hover:scale-105 transition-all ease-in-out duration-300"
          >
            <CoverImage {...post} />
            {/* Post content */}
            <div>
              {/* Reading time */}
              <div className="flex items-center text-[9px] text-secondary-500 mb-2">
                <TbClockBitcoin className="w-4 h-4 stroke-secondary-500 mr-1" />
                <span>Reading time: {post.readingTime} Minutes</span>
              </div>
              <Link href={`/blogs/${post.slug}`}>
                <h2 className="text-secondary-900 text-base font-bold mb-1">
                  {post.title}
                </h2>
              </Link>
              <p className="text-xs text-secondary-600 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                laborum!
              </p>

              <div className="flex items-center text-sm text-secondary-800 hover:underline">
                <p>read more </p>
                <IoArrowForward />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <p>No blogs are published yet!</p>
  );
}
export default PostsList;
