import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Navbar, NavbarLink } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextPress",
  description: "A platform where you can create and share your blogs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} min-h-screen`}>
      <body className="text-secondary-900 antialiased">
        <Navbar title="NextPress">
          <NavbarLink title="Home" href="/" />
          <NavbarLink title="Blogs" href="/blogs" />
        </Navbar>
        <main className="container xl:max-w-screen-xl py-8">{children}</main>
      </body>
    </html>
  );
}
