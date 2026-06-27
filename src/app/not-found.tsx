import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-6 py-32">
      <span className="text-sm font-medium uppercase tracking-widest text-accent">
        404
      </span>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 max-w-xl text-black/60 dark:text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
      >
        Back home
      </Link>
    </div>
  );
}
