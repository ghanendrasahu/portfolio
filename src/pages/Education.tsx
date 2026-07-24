import education from "../data/education";
import certificates from "../data/certificates";

export default function Education() {
  return (
    <>
      <h2 className="page-title">Education</h2>
      <p className="page-subtitle">Academic background and certifications</p>

      <div>
        {education.map((item) => (
          <div key={item.id} className="relative mb-4 overflow-hidden rounded-[10px] border border-border bg-surface p-6">
            <img
              src="/bg-education.jpg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="pointer-events-none absolute inset-0 bg-bg/75" aria-hidden="true" />
            <div className="relative flex items-start gap-[18px]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-surface2 text-[26px]">
              {item.emoji}
            </div>
            <div>
              <h3 className="font-display text-[15.5px] font-semibold">{item.degree}</h3>
              <p className="mb-1.5 text-[13.5px] text-accent">{item.institution}</p>
              <p className="text-[12.5px] text-tmuted">{item.period}</p>
              {item.detail && <p className="mt-1.5 text-[13px] text-tsecondary">{item.detail}</p>}
            </div>
            </div>
          </div>
        ))}
      </div>

      <p className="section-label mt-8">Certifications</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            className="animate-floaty relative overflow-hidden rounded-[10px] border border-border bg-surface px-[18px] py-4"
            style={{ animationDelay: `${i * 0.45}s` }}
          >
            <img
              src="/bg-education.jpg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="pointer-events-none absolute inset-0 bg-bg/75" aria-hidden="true" />
            <div className="relative flex items-center gap-3">
              <span className="shrink-0 text-lg">{cert.emoji}</span>
              <p className="text-[13.5px] font-medium leading-snug text-tsecondary">{cert.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
