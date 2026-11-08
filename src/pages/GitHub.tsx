import { ArrowUpRight } from "lucide-react";
import githubRepos from "../data/github";
import CardTilt from "../components/3d/CardTilt";
import Card from "../components/ui/Card";

const langColors: Record<string, string> = {
  Python: "bg-accent/10 text-accent",
  TypeScript: "bg-accent3/10 text-accent3",
  "Jupyter Notebook": "bg-warning/10 text-warning",
  JavaScript: "bg-warning/10 text-warning",
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
          <CardTilt key={repo.repo}>
            <Card
              as="a"
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              image="/bg-github.jpg"
              hover
              className="flex flex-col"
            >
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="font-display text-[15.5px] font-semibold leading-snug">{repo.name}</h3>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${langColors[repo.language] ?? "bg-surface2 text-tsecondary"}`}
              >
                {repo.language}
              </span>
            </div>
            <p className="mb-3 text-[13px] leading-relaxed text-tsecondary text-pretty">{repo.description}</p>
            <span className="inline-flex items-center gap-1 text-[12.5px] font-medium text-accent group-hover:underline">
              View on GitHub <ArrowUpRight size={13} />
            </span>
            </Card>
          </CardTilt>
        ))}
      </div>
    </>
  );
}
