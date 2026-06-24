import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <section id="about">
        <h1 className="text-3xl font-bold">Hi, I&apos;m Your Name.</h1>
        <p className="mt-4 max-w-2xl text-black/70 dark:text-white/70">
          A short bio: what you&apos;re studying, what you&apos;re interested
          in, and what kind of work you&apos;re looking for. Replace this
          paragraph in{" "}
          <code className="text-sm bg-black/5 dark:bg-white/10 px-1 rounded">
            src/app/page.tsx
          </code>
          .
        </p>
      </section>

      <section className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Link href="/projects" className="text-sm underline">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
