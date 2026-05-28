import { Suspense } from "react";
import PostsList from "./_components/PostsList";
import Spinner from "@/ui/Spinner";

function Page() {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        aperiam!
      </p>
      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
export default Page;
