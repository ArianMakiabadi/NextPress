import Link from "next/link";
import Button from "@/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-secondary-50 text-secondary-900 flex items-center justify-center px-4">
      <div className="p-10 bg-secondary-0 rounded-2xl shadow-sm border border-secondary-100 text-center max-w-md w-full flex flex-col items-center gap-y-6">
        {/* 404 */}
        <span className="text-8xl font-extrabold text-primary-900">404</span>

        {/* Title */}
        <h1 className="text-2xl font-semibold">Page Not Found</h1>

        {/* Description */}
        <p className="text-secondary-500 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* CTA — matches homepage pattern: Link inside Button */}
        <Button>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  );
}