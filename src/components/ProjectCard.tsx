import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import CategoryBadge from "@/components/CategoryBadge";

export default function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.media.find((m) => m.type === "image");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-accent-soft to-accent/20">
        <div className="absolute left-3 top-3 z-10">
          <CategoryBadge category={project.category} />
        </div>
        {thumbnail ? (
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-accent/40">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-black/60 dark:text-white/60">
          {project.course} &middot; {project.year}
        </p>
        <p className="mt-3 text-sm">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent-soft px-2 py-1 text-xs text-accent"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full bg-accent-soft px-2 py-1 text-xs text-accent">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
