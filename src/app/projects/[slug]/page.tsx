import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; All projects
      </Link>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-2 text-black/60 dark:text-white/60">
        {project.course} &middot; {project.year}
      </p>

      <p className="mt-6 text-lg leading-relaxed">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
          >
            {t}
          </span>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">What I learned</h2>
        <ul className="mt-3 space-y-2">
          {project.whatILearned.map((point) => (
            <li key={point} className="flex gap-2 text-black/80 dark:text-white/80">
              <span className="text-accent">&#9656;</span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Gallery</h2>
        {project.media.length === 0 ? (
          <div className="mt-3 rounded-xl border border-dashed border-black/15 p-6 text-sm text-black/50 dark:border-white/15 dark:text-white/50">
            Drop screenshots or video into{" "}
            <code className="rounded bg-black/5 px-1 text-xs dark:bg-white/10">
              public/projects/{project.slug}/
            </code>{" "}
            and reference them in this project&apos;s{" "}
            <code className="rounded bg-black/5 px-1 text-xs dark:bg-white/10">
              media
            </code>{" "}
            array in{" "}
            <code className="rounded bg-black/5 px-1 text-xs dark:bg-white/10">
              src/data/projects.ts
            </code>
            .
          </div>
        ) : (
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {project.media.map((m) =>
              m.type === "image" ? (
                <Image
                  key={m.src}
                  src={m.src}
                  alt={m.alt}
                  width={800}
                  height={600}
                  className="rounded-xl border border-black/10 dark:border-white/10"
                />
              ) : (
                <video
                  key={m.src}
                  src={m.src}
                  controls
                  className="w-full rounded-xl border border-black/10 dark:border-white/10"
                />
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
}
