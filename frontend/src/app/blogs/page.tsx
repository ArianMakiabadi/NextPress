import { Suspense } from "react";
import BlogsList from "./_components/BlogsList";
import Spinner from "@/ui/Spinner";

function Page() {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        aperiam!
      </p>
      <Suspense fallback={<Spinner />}>
        <BlogsList />
      </Suspense>
    </div>
  );
}
export default Page;
