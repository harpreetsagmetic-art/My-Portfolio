import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">
          built with Next.js · deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
