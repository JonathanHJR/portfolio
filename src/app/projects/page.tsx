import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-sm font-medium uppercase tracking-widest text-accent">
        Work
      </span>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">All Projects</h1>
      <p className="mt-3 max-w-xl text-black/60 dark:text-white/60">
        A collection of things I&apos;ve built throughout my studies.
      </p>
      <div className="mt-8">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
