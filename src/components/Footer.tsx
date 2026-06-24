export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-black/10 dark:border-white/10 mt-auto"
    >
      <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-black/60 dark:text-white/60">
        <p>Get in touch: your.email@example.com</p>
        <p className="mt-1">
          <a href="https://github.com/your-username" className="underline">
            GitHub
          </a>
          {" · "}
          <a href="https://linkedin.com/in/your-username" className="underline">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
