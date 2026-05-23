import Link from "next/link";
import Button from "@/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md w-full flex flex-col items-center gap-y-6 bg-secondary-0 p-10 rounded-xl shadow-sm">
        {/* 404 */}
        <span className="text-8xl font-extrabold tracking-tight text-primary-900">
          404
        </span>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-secondary-900">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-secondary-500 text-sm leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* CTA */}
        <Link href="/">
          <Button variant="primary" className="px-8">
            Go Home
          </Button>
        </Link>
      </div>
    </main>
  );
}