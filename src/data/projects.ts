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
    slug: "subject-404",
    title: "Subject 404",
    category: "Academic",
    course: "GAM300 (Team Game Production), DigiPen Singapore",
    year: "2025–2026",
    summary:
      "A 3D sci-fi perspective puzzle game where you play a robot escaping an abandoned factory, switching between first-person control and an overhead CCTV view to hack electronics with power cores while evading the watchful eye of a malevolent AI. Built on The Umbral Void, a custom C++ engine I helped write from scratch as Graphics Lead.",
    whatILearned: [
      "Built the engine's rendering pipeline as Graphics Lead: an ECS-based forward/deferred renderer, PBR shaders with image-based lighting (skybox, irradiance, BRDF LUT), and a bloom post-process stack",
      "Wrote the mesh, texture, and shader compilers that turned raw FBX/PNG assets into engine-ready formats, plus the static and skeletal animation system",
      "Implemented gameplay-tied VFX (CRT/CCTV scanlines, night vision, low-battery glitch, hit-stun, death) and frustum culling for performance",
      "Continuously extended the ImGui editor (new component panels, search, undo/redo) and wrote C# gameplay scripts for enemy AI and animation state transitions",
      "Did cross-team debugging across a 14-person team, since most other systems depended on graphics and the editor",
    ],
    tech: ["C++", "OpenGL", "EnTT", "Jolt Physics", "C# (Mono)", "Dear ImGui"],
    media: [
      {
        type: "image",
        src: "/projects/subject-404/capsule.png",
        alt: "Subject 404 capsule art: a pyramid of CRT monitors with the game's red-eye logo and the player robot",
      },
      {
        type: "video",
        src: "/projects/subject-404/gameplay.mp4",
        alt: "Subject 404 gameplay clip",
      },
      {
        type: "video",
        src: "/projects/subject-404/editor.mp4",
        alt: "The Umbral Void editor in use",
      },
    ],
  },
  {
    slug: "cs380-ai",
    title: "AI in Games",
    category: "Academic",
    course: "CS380, DigiPen Singapore",
    year: "2025",
    summary:
      "Three C++ AI programming assignments built on the Rabin Engine framework, covering the core algorithms behind game AI: a behavior tree system with a visual node editor, a weighted A* pathfinder with multiple heuristics and path post-processing, and a terrain analysis system used for enemy vision and occupancy-map-driven search behavior.",
    whatILearned: [
      "Implemented a behavior tree node library from scratch — control-flow nodes (Sequencer, Selector, ParallelSequencer, RandomSelector), decorators (Delay, InvertedRepeater, RepeatFourTimes), and leaf nodes for agent movement and sound — then authored agent behaviors using the built-in visual tree editor",
      "Built a weighted A* pathfinder supporting four heuristics (Manhattan, Euclidean, Octile, Chebyshev), with a precomputed neighbor cache to avoid per-frame wall checks, a vector-backed binary heap for the open list, and optional rubber banding and path smoothing post-processes",
      "Wrote terrain analysis layers for openness (distance-to-wall), cell-to-cell line-of-sight visibility, and agent forward-cone vision, then drove enemy search behavior using exponential-decay occupancy maps — the enemy navigates toward the highest-probability last-seen cell when the player breaks line of sight",
    ],
    tech: ["C++", "DirectX 11"],
    media: [
      {
        type: "image",
        src: "/projects/cs380-ai/thumbnail.jpg",
        alt: "CS380 AI Framework showing terrain analysis heat map with agents and path arrows",
      },
      {
        type: "video",
        src: "/projects/cs380-ai/pathfinding.mp4",
        alt: "A* pathfinding and terrain analysis demo",
      },
      {
        type: "video",
        src: "/projects/cs380-ai/behavior-tree.mp4",
        alt: "Behavior tree nodes and visual editor demo",
      },
    ],
  },
  {
    slug: "geo-surfers",
    title: "Geo Surfers",
    category: "Academic",
    course: "CSD1401 (Team Project), DigiPen Singapore",
    year: "2023",
    summary:
      "A 2D endless runner built in C with the CProcessing library, where the player dodges obstacles while the camera keeps scrolling forward. Built as a team project for DigiPen's intro programming course.",
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
