import experiences from "../data/experience";

export default function Experience() {
  return (
    <>
      <h2 className="page-title">Experience</h2>
      <p className="page-subtitle">Hands-on ML and AI engineering roles</p>

      <ol>
        {experiences.map((exp) => (
          <li key={exp.id} className="grid gap-y-1.5 md:grid-cols-[140px_1fr] md:gap-x-6">
            <p className="text-[12.5px] font-medium leading-snug text-tmuted md:pt-1 md:text-right">
              {exp.startDate} – {exp.endDate}
            </p>

            <div className="relative border-l-2 border-border pb-9 pl-6 last:pb-0">
              <span className="pulse-dot absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-bg" />
              <div className="relative overflow-hidden rounded-[10px] border border-border bg-surface p-5">
                <img
                  src="/bg-experience.jpg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
                />
                <div className="pointer-events-none absolute inset-0 bg-bg/75" aria-hidden="true" />
                <div className="relative">
              <h3 className="font-display text-base font-semibold">{exp.role}</h3>
              <p className="mb-3 text-[13.5px] text-accent">
                {[exp.company, exp.note, exp.location].filter(Boolean).join(" · ")}
              </p>
              <ul className="flex list-none flex-col gap-2 p-0">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 24)}
                    className="relative pl-3.5 text-sm leading-relaxed text-tsecondary before:absolute before:left-0 before:text-accent before:content-['›']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
