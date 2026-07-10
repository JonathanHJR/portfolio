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
    slug: "aws-help-desk",
    title: "Serverless Help Desk",
    category: "Academic",
    course: "CSD3156 (Team Project), DigiPen Singapore",
    year: "2026",
    summary:
      "A serverless help desk on AWS where users submit support tickets and receive instant responses from a Gemini AI chatbot, while support agents manage tickets through an admin dashboard. The full stack — React frontend on S3+CloudFront, Python Lambdas behind REST and WebSocket API Gateway, DynamoDB, Cognito auth, SES email, and WAF — is deployed via AWS SAM and continuously delivered through GitHub Actions.",
    whatILearned: [
      "Architected the full serverless stack from scratch: React+Vite frontend on S3/CloudFront, Python Lambda functions behind REST and WebSocket API Gateway, and DynamoDB tables for tickets, chat history, and replies",
      "Integrated Google Gemini as an AI chatbot backed by a Lambda, with WebSocket support so AI replies stream in real time without polling",
      "Set up Cognito user pools with user/agent groups for role-based access, IAM least-privilege roles for each Lambda, and WAF rules on the CloudFront distribution for edge-level protection",
      "Wired up SES email notifications that trigger on ticket status changes, and built a CI/CD pipeline with GitHub Actions that builds and deploys the SAM stack, bakes Cognito and API outputs into the React build, and invalidates the CloudFront cache on every push",
      "Load-tested the live API with Locust, simulating concurrent user and agent traffic to verify Lambda auto-scaling behaviour under load",
    ],
    tech: ["React", "Python", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "Cognito", "AWS SAM", "GitHub Actions"],
    media: [
      {
        type: "image",
        src: "/projects/aws-help-desk/thumbnail.jpg",
        alt: "Serverless Help Desk architecture diagram showing AWS Lambda, DynamoDB, Google Gemini, and SES",
      },
      {
        type: "video",
        src: "/projects/aws-help-desk/demo.mp4",
        alt: "Serverless Help Desk demo: user login, ticket submission, AI chat, and agent dashboard",
      },
    ],
  },
  {
    slug: "android-endless-runner",
    title: "Wild Rush",
    category: "Academic",
    course: "CSD3156 (Team Project), DigiPen Singapore",
    year: "2026",
    summary:
      "A 3D endless runner for Android where an animal character must jump over wooden fences or shrink through gap fences, rendered in real time with Google Filament. The player taps to jump, uses voice pitch to sprint or shrink, and waves at the front camera to clear a fog mechanic that gradually obscures the screen.",
    whatILearned: [
      "Built a 3D game on Android using Google Filament for real-time rendering, with a custom GameEngine handling entity lifecycles, obstacle spawning with a shuffle-bag randomiser, AABB collision detection, and animated scene elements like a sun orbit and bobbing clouds",
      "Implemented pitch detection from scratch using autocorrelation on raw PCM audio (AudioRecord at 44.1 kHz) to map high pitch to a sprint speed boost and low pitch to a shrink action, with RMS volume thresholding to filter background noise",
      "Built a front-camera motion detector using CameraX that computes frame-to-frame pixel differences on the Y plane to measure waving intensity, which reduces the in-game fog level",
      "Structured the app with Jetpack Compose and a single-activity MVVM architecture — the Filament surface stays permanently in the background while Compose screens overlay on top, avoiding reloads on screen transitions",
      "Added a built-in screen recorder using MediaProjectionManager with a foreground service, handling Android 14's stricter media projection permission model",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Google Filament", "CameraX", "Android SDK"],
    media: [
      {
        type: "image",
        src: "/projects/android-endless-runner/thumbnail.jpg",
        alt: "Wild Rush main menu showing the Shiba Inu character in a 3D farm environment",
      },
      {
        type: "video",
        src: "/projects/android-endless-runner/gameplay.mp4",
        alt: "Wild Rush gameplay showing 3D endless runner with voice and camera controls",
      },
    ],
  },
  {
    slug: "computer-graphics",
    title: "Computer Graphics",
    category: "Academic",
    course: "CSD2151 (Individual), DigiPen Singapore",
    year: "2025",
    summary:
      "Seven OpenGL assignments building up the real-time rendering pipeline from scratch — starting with procedural GLSL shaders and ray tracing, through Blinn-Phong lighting and environment mapping, to a two-pass post-processing FBO pipeline and a three-pass deferred renderer with normal mapping.",
    whatILearned: [
      "Wrote a fully procedural GLSL fragment shader in the ShaderToy style: ray-marched an implicit surface using a signed-distance map(), applied a cosine-based colour palette, and layered an animated comet particle effect — all driven by a per-pixel ray cast with no geometry",
      "Implemented ray–sphere intersection from first principles (quadratic formula, discriminant test) in both a C++ unit-test harness and a live GLSL fragment shader that renders a scene per pixel in real time",
      "Built the Blinn-Phong reflectance model across three shading modes (flat, Gouraud vertex-shaded, per-fragment Phong-interpolated) and a spotlight variant, with interactive orbit/translate controls and switchable geometry",
      "Wrote a cubemap sampler from scratch for environment mapping — loaded a six-face HDR light probe, rendered a skybox, planar reflection, and environment-mapped objects, with real-time keyboard control over reflection factor and refraction index",
      "Combined PBR (roughness/metallic parameters), cel-shading with discrete Blinn-Phong light levels, procedural discard patterns, and linear distance fog into a single multi-effect fragment shader",
      "Implemented a two-pass post-processing pipeline using an FBO: the scene renders to a texture in pass 0, and pass 1 applies screen-space filters toggled at runtime — separable Gaussian blur (vertical, horizontal, full) and Sobel edge detection with an adjustable threshold",
      "Built a three-pass deferred renderer: pass 0 writes light direction, view direction, and UVs into G-buffer textures; subsequent passes read them back to apply normal-mapped Blinn-Phong lighting on an ogre mesh with a diffuse and normal map",
    ],
    tech: ["C++", "OpenGL", "GLSL", "GLFW", "GLM"],
    media: [
      {
        type: "image",
        src: "/projects/computer-graphics/thumbnail.jpg",
        alt: "Ogre mesh rendered with normal mapping and deferred shading in OpenGL",
      },
      {
        type: "video",
        src: "/projects/computer-graphics/procedural.mp4",
        alt: "Procedural ray-marched GLSL shader with animated comet effect",
      },
      {
        type: "video",
        src: "/projects/computer-graphics/raytracing.mp4",
        alt: "Live GLSL ray-traced sphere scene",
      },
      {
        type: "video",
        src: "/projects/computer-graphics/shading.mp4",
        alt: "Blinn-Phong shading modes: flat, Gouraud, per-fragment, spotlight",
      },
      {
        type: "video",
        src: "/projects/computer-graphics/envmap.mp4",
        alt: "Environment mapping with HDR cubemap, skybox, and reflections",
      },
      {
        type: "video",
        src: "/projects/computer-graphics/postfx.mp4",
        alt: "FBO post-processing: Gaussian blur and Sobel edge detection",
      },
      {
        type: "video",
        src: "/projects/computer-graphics/deferred.mp4",
        alt: "Three-pass deferred shading with normal mapping on an ogre mesh",
      },
    ],
  },
  {
    slug: "ai-in-games",
    title: "AI in Games",
    category: "Academic",
    course: "CS380 (Individual), DigiPen Singapore",
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
        src: "/projects/ai-in-games/thumbnail.jpg",
        alt: "CS380 AI Framework showing terrain analysis heat map with agents and path arrows",
      },
      {
        type: "video",
        src: "/projects/ai-in-games/pathfinding.mp4",
        alt: "A* pathfinding and terrain analysis demo",
      },
      {
        type: "video",
        src: "/projects/ai-in-games/behavior-tree.mp4",
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
