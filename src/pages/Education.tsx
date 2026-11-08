import education from "../data/education";
import certificates from "../data/certificates";
import Card from "../components/ui/Card";

export default function Education() {
  return (
    <>
      <h2 className="page-title">Education</h2>
      <p className="page-subtitle">Academic background and certifications</p>

      <div>
        {education.map((item) => (
          <Card
            key={item.id}
            image="/bg-education.jpg"
            imageOpacity="opacity-25"
            overlay="bg-bg/75"
            className="mb-4"
          >
            <div className="flex items-start gap-[18px]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface2 text-[26px]">
                {item.emoji}
              </div>
              <div>
                <h3 className="font-display text-[15.5px] font-semibold">{item.degree}</h3>
                <p className="mb-1.5 text-[13.5px] text-accent">{item.institution}</p>
                <p className="text-[12.5px] text-tmuted">{item.period}</p>
                {item.detail && <p className="mt-1.5 text-[13px] text-tsecondary">{item.detail}</p>}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="section-label mt-8">Certifications</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {certificates.map((cert, i) => (
          <Card
            key={cert.id}
            image="/bg-education.jpg"
            imageOpacity="opacity-25"
            overlay="bg-bg/75"
            paddingClassName="px-[18px] py-4"
            className="animate-floaty h-auto"
            style={{ animationDelay: `${i * 0.45}s` }}
          >
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-lg">{cert.emoji}</span>
              <p className="text-[13.5px] font-medium leading-snug text-tsecondary text-pretty">{cert.name}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
