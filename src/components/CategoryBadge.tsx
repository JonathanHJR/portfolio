import type { ProjectCategory } from "@/data/projects";

const styles: Record<ProjectCategory, string> = {
  Academic: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  Work: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  Personal: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
};

export default function CategoryBadge({
  category,
}: {
  category: ProjectCategory;
}) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium shadow-sm ${styles[category]}`}
    >
      {category}
    </span>
  );
}
