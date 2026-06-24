import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section
        id="about"
        className="flex min-h-[70vh] flex-col items-start justify-center py-20"
      >
        <span className="text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </span>
        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-fuchsia-500 bg-clip-text text-transparent">
            Your Name
          </span>
          .
        </h1>
        <p className="mt-6 max-w-xl text-lg text-black/70 dark:text-white/70">
          A short bio: what you&apos;re studying, what you&apos;re interested
          in, and what kind of work you&apos;re looking for. Replace this
          paragraph in{" "}
          <code className="rounded bg-black/5 px-1 text-sm dark:bg-white/10">
            src/app/page.tsx
          </code>
          .
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-white/15"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-accent hover:underline"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
