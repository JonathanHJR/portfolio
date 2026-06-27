export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <span className="text-sm font-medium uppercase tracking-widest text-accent">
        About
      </span>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">My path here</h1>
      <p className="mt-6 text-lg leading-relaxed text-black/70 dark:text-white/70">
        I started out studying Integrated Facility Management at TP — a field
        about as far from software as it gets. After that diploma, I wanted
        to expand my knowledge and skills with a different degree, which led
        me to switch tracks into Computer Science (Real-Time Interactive
        Simulation) at SIT-DigiPen.
      </p>
    </div>
  );
}
