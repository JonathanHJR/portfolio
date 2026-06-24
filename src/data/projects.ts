export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export type ProjectCategory = "Academic" | "Work" | "Personal";

export const projectCategories: ProjectCategory[] = [
  "Academic",
  "Work",
  "Personal",
];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  course: string;
  year: string;
  summary: string;
  whatILearned: string[];
  tech: string[];
  media: ProjectMedia[];
};

// Edit/replace these with your real projects.
// Drop screenshots/videos into public/projects/<slug>/ and reference them in `media` below.
export const projects: Project[] = [
  {
    slug: "example-project-one",
    title: "Example Project One",
    category: "Academic",
    course: "Course name, Year X",
    year: "2025",
    summary:
      "One or two sentences on what this project is and the problem it solves.",
    whatILearned: [
      "Key concept or skill you picked up",
      "A challenge you overcame and how",
      "Something you'd do differently next time",
    ],
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    media: [
      // { type: "image", src: "/projects/example-project-one/screenshot1.png", alt: "Screenshot of the dashboard" },
    ],
  },
  {
    slug: "example-project-two",
    title: "Example Project Two",
    category: "Work",
    course: "Company/role name, Year X",
    year: "2025",
    summary:
      "One or two sentences on what this project is and the problem it solves.",
    whatILearned: [
      "Key concept or skill you picked up",
      "A challenge you overcame and how",
    ],
    tech: ["Tech 1", "Tech 2"],
    media: [],
  },
  {
    slug: "example-project-three",
    title: "Example Project Three",
    category: "Personal",
    course: "Side project, Year X",
    year: "2024",
    summary:
      "One or two sentences on what this project is and the problem it solves.",
    whatILearned: ["Key concept or skill you picked up"],
    tech: ["Tech 1"],
    media: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
