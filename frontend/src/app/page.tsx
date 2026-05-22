import Button from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary-50 text-secondary-900">
      <section className="container mx-auto px-4 py-20 lg:py-28 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build and Manage Your Blog with Confidence
          </h1>

          <p className="mt-6 text-secondary-500 text-lg max-w-xl">
            A lightweight blog CMS to create posts, moderate comments, and
            manage content — fast, simple, and user friendly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>
              <Link href="/blogs">Explore Blogs</Link>
            </Button>

            <Button variant="outline">
              <Link href="/profile">Dashboard</Link>
            </Button>
          </div>

          <div className="mt-6 text-sm text-secondary-400">
            Free to browse public posts — sign in to manage.
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-gradient-to-tr from-primary-300 to-primary-500 shadow-lg" />
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-secondary-0 rounded-2xl shadow-sm border border-secondary-100">
            <h3 className="font-semibold text-lg">Create Posts</h3>

            <p className="mt-2 text-secondary-500 text-sm">
              Write rich posts with images and markdown support.
            </p>
          </div>

          <div className="p-6 bg-secondary-0 rounded-2xl shadow-sm border border-secondary-100">
            <h3 className="font-semibold text-lg">Moderate Comments</h3>

            <p className="mt-2 text-secondary-500 text-sm">
              Approve, reply, or remove comments from a single panel.
            </p>
          </div>

          <div className="p-6 bg-secondary-0 rounded-2xl shadow-sm border border-secondary-100">
            <h3 className="font-semibold text-lg">Secure & Fast</h3>

            <p className="mt-2 text-secondary-500 text-sm">
              Simple, performant defaults with role-based access control.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
