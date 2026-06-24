import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border border-black/10 dark:border-white/10 p-5 hover:border-black/30 dark:hover:border-white/30 transition-colors"
    >
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-black/60 dark:text-white/60 mt-1">
        {project.course} &middot; {project.year}
      </p>
      <p className="mt-3 text-sm">{project.summary}</p>
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
    </Link>
  );
}
