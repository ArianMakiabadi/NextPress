import { Metadata } from "next";
import CategoryList from "./_components/CategoryList";

export const metadata: Metadata = {
  title: "Blogs",
};

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="text-lg font-bold mb-12 ">List of the blogs</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4 bg-violet-200">
          <CategoryList />
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 bg-orange-200">
          {children}
        </div>
      </div>
    </div>
  );
}
export default Layout;
