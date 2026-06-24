import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          Your Name
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
