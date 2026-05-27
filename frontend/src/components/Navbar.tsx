import type { ReactNode } from "react";
import Link from "next/link";

type NavbarLinkProps = {
  title: string;
  href: string;
};

type NavbarProps = {
  title: string;
  children: ReactNode;
};

export function Navbar({ title, children }: NavbarProps) {
  return (
    <header className="border-b border-secondary-200/70 bg-secondary-0/80 backdrop-blur-md">
      <div className="container xl:max-w-screen-xl py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-secondary-900"
          >
            {title}
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-secondary-700">
              {children}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function NavbarLink({ title, href }: NavbarLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex items-center rounded-full border border-transparent px-4 py-2 transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-900"
      >
        {title}
      </Link>
    </li>
  );
}
