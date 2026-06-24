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
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/projects" className="text-sm underline">
        &larr; All projects
      </Link>

      <h1 className="mt-4 text-3xl font-bold">{project.title}</h1>
      <p className="mt-1 text-black/60 dark:text-white/60">
        {project.course} &middot; {project.year}
      </p>

      <p className="mt-6 text-lg">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full bg-black/5 dark:bg-white/10 px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">What I learned</h2>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          {project.whatILearned.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Gallery</h2>
        {project.media.length === 0 ? (
          <div className="mt-3 rounded-lg border border-dashed border-black/20 dark:border-white/20 p-6 text-sm text-black/50 dark:text-white/50">
            Drop screenshots or video into{" "}
            <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">
              public/projects/{project.slug}/
            </code>{" "}
            and reference them in this project&apos;s{" "}
            <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">
              media
            </code>{" "}
            array in{" "}
            <code className="text-xs bg-black/5 dark:bg-white/10 px-1 rounded">
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
                  className="rounded-lg border border-black/10 dark:border-white/10"
                />
              ) : (
                <video
                  key={m.src}
                  src={m.src}
                  controls
                  className="rounded-lg border border-black/10 dark:border-white/10 w-full"
                />
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
}
