import skillGroups from "../data/skills";
import type { SkillColor } from "../data/skills";
import Card from "../components/ui/Card";

const titleColors: Record<SkillColor, string> = {
  blue: "text-accent",
  green: "text-accent2",
  purple: "text-accent3",
  orange: "text-warning",
};

export default function Skills() {
  return (
    <>
      <h2 className="page-title">Skills</h2>
      <p className="page-subtitle">Technologies and tools across the ML / AI stack</p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card as="section" key={group.id} image="/bg-skills.jpg" imageOpacity="opacity-25" overlay="bg-bg/75" paddingClassName="p-[22px]">
            <h3
              className={`mb-3.5 border-b border-border pb-2.5 font-display text-[13px] font-semibold uppercase tracking-wider ${titleColors[group.color]}`}
            >
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-[7px]">
              {group.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
