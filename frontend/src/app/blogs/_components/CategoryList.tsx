import Link from "next/link";

type Category = {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="space-y-2 p-2">
      {categories.map((item: Category) => {
        return (
          <li
            key={item._id}
            className="bg-secondary-100 hover:scale-105 transition-all rounded-md"
          >
            <Link href={`/blogs/category/${item.slug}`} className="p-1">
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default CategoryList;
