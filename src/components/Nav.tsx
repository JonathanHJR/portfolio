import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-black/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Jing Rui
        </Link>
        <div className="flex gap-8 text-sm font-medium text-black/70 dark:text-white/70">
          <Link href="/projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/#contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
