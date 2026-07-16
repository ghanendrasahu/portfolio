import { ArrowUpRight } from "lucide-react";
import githubRepos from "../data/github";

const langColors: Record<string, string> = {
  Python: "bg-accent/10 text-accent",
  TypeScript: "bg-accent3/10 text-accent3",
  "Jupyter Notebook": "bg-[#f78166]/10 text-[#f78166]",
  JavaScript: "bg-yellow-500/10 text-yellow-400",
};

export default function GitHub() {
  return (
    <>
      <h2 className="page-title">GitHub</h2>
      <p className="page-subtitle">
        All public repositories ·{" "}
        <a
          href="https://github.com/ghanendrasahu?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:underline"
        >
          github.com/ghanendrasahu
        </a>
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {githubRepos.map((repo) => (
          <a
            key={repo.repo}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[10px] border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
          >
            <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent to-accent3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="font-display text-[15.5px] font-semibold leading-snug">{repo.name}</h3>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${langColors[repo.language] ?? "bg-surface2 text-tsecondary"}`}
              >
                {repo.language}
              </span>
            </div>
            <p className="mb-3 text-[13px] leading-relaxed text-tsecondary">{repo.description}</p>
            <span className="inline-flex items-center gap-1 text-[12.5px] font-medium text-accent group-hover:underline">
              View on GitHub <ArrowUpRight size={13} />
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
