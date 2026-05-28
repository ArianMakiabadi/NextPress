import { Post } from "../../types/post";

type PostsResponse = {
  data: {
    posts: Post[];
  };
};

async function Page() {
  await new Promise<void>((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  }: PostsResponse = await res.json();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return <div>{post.title}</div>;
      })}
    </div>
  );
}
export default Page;
