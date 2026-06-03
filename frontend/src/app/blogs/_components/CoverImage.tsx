import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

function CoverImage({ coverImageUrl, title, slug }: Post) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      <Link href={`/blogs/${slug}`}>
        <Image
          fill
          src={coverImageUrl}
          alt={title}
          className="object-cover object-center"
        />
      </Link>
    </div>
  );
}
export default CoverImage;
