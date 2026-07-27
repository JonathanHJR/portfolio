"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/data/projects";

export default function GalleryLightbox({ media }: { media: ProjectMedia[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const active = media.find((m) => m.src === open);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {media.map((m) =>
          m.type === "image" ? (
            <button
              key={m.src}
              onClick={() => setOpen(m.src)}
              className="cursor-zoom-in overflow-hidden rounded-xl border border-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/10"
              aria-label={`Expand image: ${m.alt}`}
            >
              <Image
                src={m.src}
                alt={m.alt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </button>
          ) : (
            <video
              key={m.src}
              src={m.src}
              controls
              className="w-full rounded-xl border border-black/10 dark:border-white/10"
            />
          )
        )}
      </div>

      {open && active && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-5 text-2xl text-white/60 hover:text-white leading-none"
          >
            ✕
          </button>

          {/* stopPropagation so clicking the image itself doesn't close */}
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <p className="mt-3 max-w-xl text-center text-sm text-white/50">
            {active.alt}
          </p>
        </div>
      )}
    </>
  );
}
