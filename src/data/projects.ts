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
    slug: "geo-surfers",
    title: "Geo Surfers",
    category: "Academic",
    course: "CSD1401 (Team Project), DigiPen Singapore",
    year: "2023",
    summary:
      "A 2D endless runner built in C with the CProcessing library, where the player dodges obstacles while the camera keeps scrolling forward. Made with a 5-person team for DigiPen's intro programming course.",
    whatILearned: [
      "Built the main menu, settings, character selection, and credits screens, plus a leaderboard with persistent save-file data",
      "Wired up score tracking, camera movement, and the game's music and sound effects",
      "Coordinated a 5-person C codebase over git, resolving merge conflicts across shared files like mainmenu.c and game.c",
    ],
    tech: ["C", "CProcessing", "Git"],
    media: [
      {
        type: "image",
        src: "/projects/geo-surfers/thumbnail.jpg",
        alt: "Geo Surfers gameplay screenshot showing the player dodging an obstacle",
      },
      {
        type: "video",
        src: "/projects/geo-surfers/gameplay.mp4",
        alt: "Geo Surfers gameplay clip",
      },
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
