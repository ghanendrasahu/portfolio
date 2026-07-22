import education from "../data/education";
import certificates from "../data/certificates";

export default function Education() {
  return (
    <>
      <h2 className="page-title">Education</h2>
      <p className="page-subtitle">Academic background and certifications</p>

      <div>
        {education.map((item) => (
          <div key={item.id} className="mb-4 flex items-start gap-[18px] rounded-[10px] border border-border bg-surface p-6">
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
        ))}
      </div>

      <p className="section-label mt-8">Certifications</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            className="animate-floaty flex items-center gap-3 rounded-[10px] border border-border bg-surface px-[18px] py-4"
            style={{ animationDelay: `${i * 0.45}s` }}
          >
            <span className="shrink-0 text-lg">{cert.emoji}</span>
            <p className="text-[13.5px] font-medium leading-snug text-tsecondary">{cert.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
